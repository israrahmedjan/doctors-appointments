import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Toaster, toast } from "sonner";

function BookAppointment({ doctor }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const [note, setNote] = useState();
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    const data = {
      data: {
        UserName: user.given_name + " " + user.family_name,
        Email: user.email,
        Time: selectedTimeSlot,
        Date: date,
        doctor: doctor.id,
        Note: note,
      },
    };
    // const data = {
    //   data: {
    //     UserName: "Israr Ahmed Jan",
    //     Email: "israrahmedjan@gmail.com",
    //     Time: selectedTimeSlot,
    //     Date: date,
    //     doctor: doctor.id,
    //     Note: note,
    //   },
    // };

    // console.log(data)
    GlobalApi.bookAppointment(data).then((resp) => {
      console.log(resp);

      if (resp) {
        // GlobalApi.sendEmail(data).then((resp) => {
        // console.log(resp);
        // });
        toast("Your booking is done!");
      }
    });
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };
  return (
    <>
      {" "}
      <Toaster />
      <Dialog>
        <DialogTrigger>
          <Button className="mt-3 rounded-full">Book Appointment</Button>
        </DialogTrigger>
        <DialogContent className="border-red-500 border w-[450px] md:w-full md:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              <div className="grid md:grid-cols-4 gap-2">
                <div className="col-span-4 md:col-span-2">
                  <h2 className="flex gap-2 items-center pb-2">
                    <CalendarDays className="text-primary h-5  md:w-6" />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border md:w-full"
                  />
                </div>
                <div className="col-span-4 md:col-span-2">
                  <h2 className="flex gap-2 items-center pb-2">
                    <Clock className="text-primary h-5 w-6" />
                    Select Time Slot
                  </h2>
                  <div
                    className="grid grid-cols-3 gap-2 border 
                        rounded-lg p-2"
                  >
                    {timeSlot?.map((item, index) => (
                      <h2
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`p-2 border cursor-pointer
                            text-center hover:bg-primary hover:text-white
                            rounded-full
                            ${
                              item.time == selectedTimeSlot &&
                              "bg-primary text-white"
                            }`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
                <div className="col-span-4">
                  <Textarea
                    className="mt-3"
                    placeholder="Note"
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <>
                <DialogClose>
                  {" "}
                  <Button
                    type="button"
                    className="text-red-500 border-red-500"
                    variant="outline"
                  >
                    Close
                  </Button>
                </DialogClose>

                <Button
                  type="button"
                  disabled={!(date && selectedTimeSlot)}
                  onClick={() => saveBooking()}
                >
                  Submit
                </Button>
              </>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default BookAppointment;
