import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import c from "./BookingForm.module.css";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";

registerLocale("en", enGB);
setDefaultLocale("en");

const BookingForm = ({ camperName }) => {
  const [displayDate, setDisplayDate] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dateInputRef = useRef(null);

  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    setTimeout(() => {
      toast.success(`Booking for "${camperName}" was successful!`);
      resetForm();
      setDisplayDate("");
    }, 1000);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, setFieldValue }) => (
        <Form className={c.form}>
          <div className={c.formTitle}>
            <h3 className={c.title}>Book your campervan now</h3>
            <p className={c.text}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          <div className={c.inputs}>
            <div className={c.formDiv}>
              <label className={c.label}>
                <Field type="text" name="name" placeholder="Name*" />
                <ErrorMessage name="name" component="div" className={c.error} />
              </label>

              <label className={c.label}>
                <Field type="email" name="email" placeholder="Email*" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={c.error}
                />
              </label>

              <label className={c.label}>
                <div className={c.dateWrapper}>
                  <input
                    type="text"
                    readOnly
                    value={
                      displayDate
                        ? displayDate
                        : isFocused
                          ? "Select a date between today"
                          : ""
                    }
                    placeholder="Booking date*"
                    className={c.customDateInput}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onClick={() => dateInputRef.current?.setOpen(true)}
                  />
                  <DatePicker
                    selected={displayDate ? new Date(displayDate) : null}
                    onChange={(date) => {
                      setFieldValue("date", date);
                      setDisplayDate(
                        date ? date.toISOString().split("T")[0] : ""
                      );
                    }}
                    locale="en"
                    calendarClassName={c.customCalendarStyle}
                    ref={dateInputRef}
                    className={c.hiddenDateInput}
                    onClickOutside={() => setIsFocused(false)}
                  />
                </div>

                <ErrorMessage name="date" component="div" className={c.error} />
              </label>

              <label>
                <Field as="textarea" name="comment" placeholder="Comment" />
              </label>
            </div>

            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Booking..." : "Send"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
