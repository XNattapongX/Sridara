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

export const tax_invoice_detail = (
  tour_id: string,
  customer_name: string,
  customer_address: string,
  customer_code: string,
  tax_payer_id: string,
  place_of_issuing_tax_invoice: string,
  date_of_issuing_tax_invoice: Date,
  tax_invoice_number: string,
  tax_payment_schedule: string,
  seller_name: string,
  sub_total: number,
  less_cash_discount: number,
  tax_exemption: number,
  before_vat: number,
  vat: number,
  grand_total: number,
  receiver_name: string,
  receiver_siging_date: Date,
  Delivery_name: string,
  Delivery_siging_date: Date,
  project_coordinator_name: string,
  project_coordinator_siging_date: Date,
  Authorized_person_name: string,
  Authorized_person_siging_date: Date
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      customer_name: {
        stringValue: customer_name,
      },
      customer_address: {
        stringValue: customer_address,
      },
      customer_code: {
        stringValue: customer_code,
      },
      tax_payer_id: {
        stringValue: tax_payer_id,
      },
      place_of_issuing_tax_invoice: {
        stringValue: place_of_issuing_tax_invoice,
      },
      date_of_issuing_tax_invoice: {
        stringValue: dayjs(date_of_issuing_tax_invoice).format("DD/MM/BBBB"),
      },
      tax_invoice_number: {
        stringValue: tax_invoice_number,
      },
      tax_payment_schedule: {
        stringValue: tax_payment_schedule,
      },
      seller_name: {
        stringValue: seller_name,
      },
      sub_total: {
        stringValue: String(sub_total),
      },
      less_cash_discount: {
        stringValue: String(less_cash_discount),
      },
      tax_exemption: {
        stringValue: String(tax_exemption),
      },
      before_vat: {
        stringValue: String(before_vat),
      },
      vat: {
        stringValue: String(vat),
      },
      grand_total: {
        stringValue: String(grand_total),
      },
      receiver_name: {
        stringValue: receiver_name,
      },
      receiver_siging_date: {
        stringValue: dayjs(receiver_siging_date).format("DD/MM/BBBB"),
      },
      Delivery_name: {
        stringValue: Delivery_name,
      },
      Delivery_siging_date: {
        stringValue: dayjs(Delivery_siging_date).format("DD/MM/BBBB"),
      },
      project_coordinator_name: {
        stringValue: project_coordinator_name,
      },
      project_coordinator_siging_date: {
        stringValue: dayjs(project_coordinator_siging_date).format(
          "DD/MM/BBBB"
        ),
      },
      Authorized_person_name: {
        stringValue: Authorized_person_name,
      },
      Authorized_person_siging_date: {
        stringValue: dayjs(Authorized_person_siging_date).format("DD/MM/BBBB"),
      },
    },
  };
};

export const tax_invoice_product = (
  tax_invoice_id: string,
  product_code: string,
  product_name: string,
  product_amount: number,
  product_unit: string,
  product_price_per_unit: number,
  product_discount: number,
  product_tax: number,
  product_total: number
) => {
  return {
    fields: {
      tax_invoice_id: {
        stringValue: tax_invoice_id,
      },
      product_code: {
        stringValue: product_code,
      },
      product_name: {
        stringValue: product_name,
      },
      product_amount: {
        stringValue: String(product_amount),
      },
      product_unit: {
        stringValue: product_unit,
      },
      product_price_per_unit: {
        stringValue: String(product_price_per_unit),
      },
      product_discount: {
        stringValue: String(product_discount),
      },
      product_tax: {
        stringValue: String(product_tax),
      },
      product_total: {
        stringValue: String(product_total),
      },
    },
  };
};

export const quotation_detail_with_product = (
  tour_id: string,
  quotation_id: string,
  quotation_date: Date,
  tax_id: string,
  customer_name: string,
  customer_address: string,
  customer_code: string,
  contact_name: string,
  contact_tel: string,
  contact_email: string,
  seller_name: string,
  seller_department: string,
  confirm_price_within: number,
  delivery_date: Date,
  product: Array<any>,
  earnest_money: number,
  price_validity_period: string,
  sub_total: number,
  less_cash_discount: number,
  product_value: number,
  vat: number,
  grand_total: number,
  seller_siging_name: string,
  seller_siging_date: Date,
  payee_siging_name: string,
  payee_siging_date: Date,
  examiner_siging_name: string,
  examiner_siging_date: Date,
  Authorized_person_siging_name: string,
  Authorized_person_siging_date: Date
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      quotation_id: {
        stringValue: quotation_id,
      },
      quotation_date: {
        stringValue: dayjs(quotation_date).format("DD/MM/BBBB"),
      },
      tax_id: {
        stringValue: tax_id,
      },
      customer_name: {
        stringValue: customer_name,
      },
      customer_address: {
        stringValue: customer_address,
      },
      customer_code: {
        stringValue: customer_code,
      },
      contact_name: {
        stringValue: contact_name,
      },
      contact_tel: {
        stringValue: contact_tel,
      },
      contact_email: {
        stringValue: contact_email,
      },
      seller_name: {
        stringValue: seller_name,
      },
      seller_department: {
        stringValue: seller_department,
      },
      confirm_price_within: {
        stringValue: String(confirm_price_within),
      },
      delivery_date: {
        stringValue: dayjs(delivery_date).format("DD/MM/BBBB"),
      },
      product: {
        arrayValue: {
          values: product,
        },
      },
      earnest_money: {
        stringValue: String(earnest_money),
      },
      price_validity_period: {
        stringValue: price_validity_period,
      },
      sub_total: {
        stringValue: String(sub_total),
      },
      less_cash_discount: {
        stringValue: String(less_cash_discount),
      },
      product_value: {
        stringValue: String(product_value),
      },
      vat: {
        stringValue: String(vat),
      },
      grand_total: {
        stringValue: String(grand_total),
      },
      seller_siging_name: {
        stringValue: seller_siging_name,
      },
      seller_siging_date: {
        stringValue: dayjs(seller_siging_date).format("DD/MM/BBBB"),
      },
      payee_siging_name: {
        stringValue: payee_siging_name,
      },
      payee_siging_date: {
        stringValue: dayjs(payee_siging_date).format("DD/MM/BBBB"),
      },
      examiner_siging_name: {
        stringValue: examiner_siging_name,
      },
      examiner_siging_date: {
        stringValue: dayjs(examiner_siging_date).format("DD/MM/BBBB"),
      },
      Authorized_person_siging_name: {
        stringValue: Authorized_person_siging_name,
      },
      Authorized_person_siging_date: {
        stringValue: dayjs(Authorized_person_siging_date).format("DD/MM/BBBB"),
      },
    },
  };
};

export const quotation_detail = (
  tour_id: string,
  quotation_id: string,
  quotation_date: Date,
  tax_id: string,
  customer_name: string,
  customer_address: string,
  customer_code: string,
  contact_name: string,
  contact_tel: string,
  contact_email: string,
  seller_name: string,
  seller_department: string,
  confirm_price_within: number,
  delivery_date: Date,
  earnest_money: number,
  price_validity_period: string,
  sub_total: number,
  less_cash_discount: number,
  product_value: number,
  vat: number,
  grand_total: number,
  seller_siging_name: string,
  seller_siging_date: Date,
  payee_siging_name: string,
  payee_siging_date: Date,
  examiner_siging_name: string,
  examiner_siging_date: Date,
  Authorized_person_siging_name: string,
  Authorized_person_siging_date: Date
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      quotation_id: {
        stringValue: quotation_id,
      },
      quotation_date: {
        stringValue: dayjs(quotation_date).format("DD/MM/BBBB"),
      },
      tax_id: {
        stringValue: tax_id,
      },
      customer_name: {
        stringValue: customer_name,
      },
      customer_address: {
        stringValue: customer_address,
      },
      customer_code: {
        stringValue: customer_code,
      },
      contact_name: {
        stringValue: contact_name,
      },
      contact_tel: {
        stringValue: contact_tel,
      },
      contact_email: {
        stringValue: contact_email,
      },
      seller_name: {
        stringValue: seller_name,
      },
      seller_department: {
        stringValue: seller_department,
      },
      confirm_price_within: {
        stringValue: String(confirm_price_within),
      },
      delivery_date: {
        stringValue: dayjs(delivery_date).format("DD/MM/BBBB"),
      },
      earnest_money: {
        stringValue: String(earnest_money),
      },
      price_validity_period: {
        stringValue: price_validity_period,
      },
      sub_total: {
        stringValue: String(sub_total),
      },
      less_cash_discount: {
        stringValue: String(less_cash_discount),
      },
      product_value: {
        stringValue: String(product_value),
      },
      vat: {
        stringValue: String(vat),
      },
      grand_total: {
        stringValue: String(grand_total),
      },
      seller_siging_name: {
        stringValue: seller_siging_name,
      },
      seller_siging_date: {
        stringValue: dayjs(seller_siging_date).format("DD/MM/BBBB"),
      },
      payee_siging_name: {
        stringValue: payee_siging_name,
      },
      payee_siging_date: {
        stringValue: dayjs(payee_siging_date).format("DD/MM/BBBB"),
      },
      examiner_siging_name: {
        stringValue: examiner_siging_name,
      },
      examiner_siging_date: {
        stringValue: dayjs(examiner_siging_date).format("DD/MM/BBBB"),
      },
      Authorized_person_siging_name: {
        stringValue: Authorized_person_siging_name,
      },
      Authorized_person_siging_date: {
        stringValue: dayjs(Authorized_person_siging_date).format("DD/MM/BBBB"),
      },
    },
  };
};

export const quotation_product = (
  quotation_id: string,
  product_code: string,
  product_name: string,
  product_amount: number,
  product_price_per_unit: number,
  product_discount: number,
  product_tax: number,
  product_total: number
) => {
  return {
    fields: {
      quotation_id: {
        stringValue: quotation_id,
      },
      product_code: {
        stringValue: product_code,
      },
      product_name: {
        stringValue: product_name,
      },
      product_amount: {
        stringValue: String(product_amount),
      },
      product_price_per_unit: {
        stringValue: String(product_price_per_unit),
      },
      product_discount: {
        stringValue: String(product_discount),
      },
      product_tax: {
        stringValue: String(product_tax),
      },
      product_total: {
        stringValue: String(product_total),
      },
    },
  };
};

export const billing_note_detail = (
  tour_id: string,
  billing_note_id: string,
  billing_note_date: Date,
  paper_limit: string,
  tax_id: string,
  customer_name: string,
  customer_address: string,
  customer_code: string,
  tel: string,
  customer_fax: string,
  contact_name: string,
  seller_name: string,
  seller_department: string,
  confirm_price_within_date: Date,
  sub_total: number,
  full_earnest_money: number,
  taxable_value: number,
  vat: number,
  grand_total: number,
  receiver_siging_name: string,
  receiver_siging_date: Date,
  deliverer_siging_name: string,
  deliverer_siging_date: Date,
  coordinator_siging_name: string,
  coordinator_siging_date: Date,
  Authorized_person_siging_name: string,
  Authorized_person_siging_date: Date
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      tax_id: {
        stringValue: tax_id,
      },
      billing_note_id: {
        stringValue: billing_note_id,
      },
      billing_note_date: {
        stringValue: dayjs(billing_note_date).format("DD/MM/BBBB"),
      },
      paper_limit: {
        stringValue: paper_limit,
      },
      customer_name: {
        stringValue: customer_name,
      },
      customer_address: {
        stringValue: customer_address,
      },
      customer_code: {
        stringValue: customer_code,
      },
      customer_tel: {
        stringValue: customer_tel,
      },
      customer_fax: {
        stringValue: customer_fax,
      },
      contact_name: {
        stringValue: contact_name,
      },
      contact_tel: {
        stringValue: contact_tel,
      },
      seller_name: {
        stringValue: seller_name,
      },
      seller_department: {
        stringValue: seller_department,
      },
      confirm_price_within_date: {
        stringValue: dayjs(confirm_price_within_date).format("DD/MM/BBBB"),
      },
      sub_total: {
        stringValue: String(sub_total),
      },
      full_earnest_money: {
        stringValue: String(full_earnest_money),
      },
      taxable_value: {
        stringValue: String(taxable_value),
      },
      vat: {
        stringValue: String(vat),
      },
      grand_total: {
        stringValue: String(grand_total),
      },
      receiver_siging_name: {
        stringValue: receiver_siging_name,
      },
      receiver_siging_date: {
        stringValue: dayjs(receiver_siging_date).format("DD/MM/BBBB"),
      },
      deliverer_siging_name: {
        stringValue: deliverer_siging_name,
      },
      deliverer_siging_date: {
        stringValue: dayjs(deliverer_siging_date).format("DD/MM/BBBB"),
      },
      coodinator_siging_name: {
        stringValue: coodinator_siging_name,
      },
      coodinator_siging_date: {
        stringValue: dayjs(coodinator_siging_date).format("DD/MM/BBBB"),
      },
      Authorized_person_siging_name: {
        stringValue: Authorized_person_siging_name,
      },
      Authorized_person_siging_date: {
        stringValue: dayjs(Authorized_person_siging_date).format("DD/MM/BBBB"),
      },
    },
  };
};

export const billing_note_product = (
  billing_note_id: string,
  product_code: string,
  product_name: string,
  product_amount: number,
  product_unit: string,
  product_price_per_unit: number,
  product_discount: number,
  product_total: number
) => {
  return {
    fields: {
      billing_note_id: {
        stringValue: billing_note_id,
      },
      product_code: {
        stringValue: product_code,
      },
      product_name: {
        stringValue: product_name,
      },
      product_amount: {
        stringValue: String(product_amount),
      },
      product_unit: {
        stringValue: product_unit,
      },
      product_price_per_unit: {
        stringValue: String(product_price_per_unit),
      },
      product_discount: {
        stringValue: String(product_discount),
      },
      product_total: {
        stringValue: String(product_total),
      },
    },
  };
};

export const receipt_detail = (
  tour_id: string,
  receipt_id: string,
  receipt_date: Date,
  store_branch: string,
  customer_name: string,
  customer_address: string,
  total_at_alphabet: string,
  total_at_number: number,
  payment_method: string,
  withholding_tax: number,
  no_of_check: string,
  date_of_check: Date,
  orgainze_siging_name: string,
  orgainze_siging_date: Date,
  payee_siging_name: string,
  payee_siging_date: Date,
  Authorized_person_siging_name: string,
  Authorized_person_siging_date: Date
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      receipt_id: {
        stringValue: receipt_id,
      },
      receipt_date: {
        stringValue: dayjs(receipt_date).format("DD/MM/BBBB"),
      },
      store_branch: {
        stringValue: store_branch,
      },
      customer_name: {
        stringValue: customer_name,
      },
      customer_address: {
        stringValue: customer_address,
      },
      total_at_alphabet: {
        stringValue: total_at_alphabet,
      },
      total_at_number: {
        stringValue: String(total_at_number),
      },
      payment_method: {
        stringValue: payment_method,
      },
      withholding_tax: {
        stringValue: String(withholding_tax),
      },
      no_of_check: {
        stringValue: no_of_check,
      },
      date_of_check: {
        stringValue: dayjs(date_of_check).format("DD/MM/BBBB"),
      },
      orgainze_siging_name: {
        stringValue: orgainze_siging_name,
      },
      orgainze_siging_date: {
        stringValue: dayjs(orgainze_siging_date).format("DD/MM/BBBB"),
      },
      payee_siging_name: {
        stringValue: payee_siging_name,
      },
      payee_siging_date: {
        stringValue: dayjs(payee_siging_date).format("DD/MM/BBBB"),
      },
      Authorized_person_siging_name: {
        stringValue: Authorized_person_siging_name,
      },
      Authorized_person_siging_date: {
        stringValue: dayjs(Authorized_person_siging_date).format("DD/MM/BBBB"),
      },
    },
  };
};

export const receipt_invoices = (
  receipt_id: string,
  invoice_id: string,
  invoice_date: Date,
  invoice_total: number,
  tax_invoice_detail: string
) => {
  return {
    fields: {
      receipt_id: {
        stringValue: receipt_id,
      },
      invoice_id: {
        stringValue: invoice_id,
      },
      invoice_date: {
        stringValue: dayjs(invoice_date).format("DD/MM/BBBB"),
      },
      invoice_total: {
        stringValue: String(invoice_total),
      },
      tax_invoice_detail: {
        stringValue: tax_invoice_detail,
      },
    },
  };
};
