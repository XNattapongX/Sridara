import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

export const group_members = (
  tour_id: string,
  thai_name: string,
  eng_name: string,
  national_id: string,
  bed_type: string,
  passport_id: string,
  date_income: Date,
  date_outcome: Date,
  dob: Date,
  nationality: string,
  gender: string,
  address: string,
  check_stamp_number: string
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      thai_name: {
        stringValue: thai_name,
      },
      eng_name: {
        stringValue: eng_name,
      },
      national_id: {
        stringValue: national_id,
      },
      bed_type: {
        stringValue: bed_type,
      },
      passport_id: {
        stringValue: passport_id,
      },
      date_income: {
        stringValue: dayjs(date_income).format("DD/MM/BBBB"),
      },
      date_outcome: {
        stringValue: dayjs(date_outcome).format("DD/MM/BBBB"),
      },
      dob: {
        stringValue: dayjs(dob).format("DD/MM/BBBB"),
      },
      nationality: {
        stringValue: nationality,
      },
      gender: {
        stringValue: gender,
      },
      address: {
        stringValue: address,
      },
      check_stamp_number: {
        stringValue: check_stamp_number,
      },
    },
  };
};

export const group_tours = (
  trip_name: string,
  program_tour: string,
  go_date: Date,
  back_date: Date,
  day: number,
  night: number,
  vehicle_income: string,
  vehicle_outcome: string,
  guide_name: Array<string>,
  guide_tel: Array<string>,
  amount_member: number
) => {
  return {
    fields: {
      trip_name: {
        stringValue: trip_name,
      },
      program_tour: {
        stringValue: program_tour,
      },
      go_date: {
        stringValue: dayjs(go_date).format("DD/MM/BBBB"),
      },
      back_date: {
        stringValue: dayjs(back_date).format("DD/MM/BBBB"),
      },
      day: {
        stringValue: String(day),
      },
      night: {
        stringValue: String(night),
      },
      vehicle_income: {
        stringValue: vehicle_income,
      },
      vehicle_outcome: {
        stringValue: vehicle_outcome,
      },
      guide_name: {
        stringValue: guide_name.join(", "),
      },
      guide_tel: {
        stringValue: guide_tel.join(", "),
      },
      amount_member: {
        stringValue: String(amount_member),
      },
    },
  };
};

export const hotel_tour = (
  tour_id: string,
  name: string,
  amount_room: number,
  check_in: Date,
  check_out: Date
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      name: {
        stringValue: name,
      },
      amount_room: {
        stringValue: String(amount_room),
      },
      check_in: {
        stringValue: dayjs(check_in).format("DD/MM/BBBB"),
      },
      check_out: {
        stringValue: dayjs(check_out).format("DD/MM/BBBB"),
      },
    },
  };
};
