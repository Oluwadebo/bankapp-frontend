import React from "react";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Navbar from "./Navbar";
import { socket } from "./endpoint";

const Socket = () => {
    const [display, setdisplay] = useState([])
    const [rec, setrec] = useState([])
    // useEffect(() => {
    //     if (localStorage.message) {
    //         let detail = JSON.parse(localStorage.message);
    //         setdisplay(detail);

    //     } else {
    //         setdisplay([]);
    //     }
    // }, [])
    useEffect(() => {
        socket.on("user-sent", (res) => {
            if (res) {
                const recieve = [...rec, res];
                setrec(recieve);
            }
        })
    }, [])
    const formik = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (values) => {
            console.log(values);
            socket.emit("chat", values);
            const newobj = [...display, values];
            setdisplay(newobj);
            // localStorage.setItem("message", JSON.stringify(newobj));
        },
        validationSchema: yup.object({
            message: yup.string().required("This field is required"),
        }),
    });
    return (
        <>
            {/* <Navbar /> */}
            <div>{rec.map((item, index) => (
                <h4> {item.message} </h4>
            ))}</div>
            <div className="wesig">{display.map((item, index) => (
                <h4> {item.message} </h4>
            ))}</div>
            <div className="container fixed-bottom">
                <div className="col-12 col-md-12 mx-auto px-4 pb-3 asd">
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="form-floating mt-4">
                            <div className="row pt-3">
                                <div className="col-11">
                                    <input
                                        type="text"
                                        placeholder="Message"
                                        className={
                                            formik.errors.message && formik.touched.message
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={formik.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="message"
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div className="col-1 px">
                                    <button
                                        type="submit"
                                        className="btn fa fa-send form-control noe"
                                    ></button>
                                </div>
                            </div>
                            {/* <input
                            type="message"
                            placeholder="Message"
                            className={
                                formik.errors.message && formik.touched.message
                                    ? "form-control is-invalid"
                                    : "form-control fa fa-send"
                            }
                            onChange={formik.handleChange}
                            style={{ backgroundColor: "#F5F7FA" }}
                            name="message"
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.message && (
                            <div style={{ color: "red" }} className="my-2">
                                {formik.errors.message}
                            </div>
                        )}
                        <label>Message</label>
                        <button
                            type="submit"
                            className="btn fa fa-send form-control asd"
                        ></button> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Socket