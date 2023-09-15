"use client"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Icon } from "@iconify/react";

//Interface
interface Inputs {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Form = () => {
    //State
    const [fetching, setFetching] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [severity, setSeverity] = useState<"error" | "success" | "">("");

    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>();

    //Submit Handler
    const onSubmit: SubmitHandler<Inputs> = async (value) => {
        await setFetching(true);
        await fetch("/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        })
            .then((response) => {
                if (!response.ok) {
                    setMessage("Something went wrong!")
                    setSeverity("error")
                    setFetching(false)
                }
                return response.json();
            })
            .then(() => {
                setMessage("Message sent successfully!")
                setSeverity("success")
                setFetching(false)
                reset()
            })
            .catch(() => {
                setMessage("Something went wrong!")
                setSeverity("error")
                setFetching(false)
            })
            .finally(() => {
                setFetching(false);
            });
    }

    return (
        <div className="col-span-8 md:col-span-8 xxs:col-span-1">
            <h4 className="text-xl font-bold">Say <span className="text-secondary">Something</span></h4>
            <form className="grid grid-cols-2 gap-4 mt-10 md:mt-10 xxs:mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                    <input
                        className="w-full border border-solid border-transparent focus:outline-none transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] focus:border-secondary py-1.5 px-4 rounded-md bg-neutral-100 placeholder:text-main block"
                        placeholder="Name"
                        {...register("name", { required: true })}
                    />
                    {errors.name &&
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            <Icon className="text-xl text-secondary" icon="clarity:error-solid" />
                        </div>
                    }
                </div>
                <div className="relative">
                    <input
                        className="w-full border border-solid border-transparent focus:outline-none transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] focus:border-secondary py-1.5 px-4 rounded-md bg-neutral-100 placeholder:text-main"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                    />
                    {errors.email &&
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            <Icon className="text-xl text-secondary" icon="clarity:error-solid" />
                        </div>
                    }
                </div>
                <div className="col-span-2 relative">
                    <input
                        className="w-full border border-solid border-transparent focus:outline-none transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] focus:border-secondary py-1.5 px-4 rounded-md bg-neutral-100 placeholder:text-main"
                        placeholder="Subject"
                        {...register("subject", { required: true })}
                    />
                    {errors.subject &&
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            <Icon className="text-xl text-secondary" icon="clarity:error-solid" />
                        </div>
                    }
                </div>
                <div className="col-span-2 relative">
                    <textarea
                        className="w-full border border-solid border-transparent focus:outline-none transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] focus:border-secondary py-1.5 px-4 rounded-md bg-neutral-100 placeholder:text-main resize-none"
                        placeholder="Message"
                        rows={6}
                        {...register("message", { required: true })}
                    />
                    {errors.message &&
                        <div className="absolute right-2 top-2">
                            <Icon className="text-xl text-secondary" icon="clarity:error-solid" />
                        </div>
                    }
                </div>
                <div className="col-span-2 flex items-center gap-3">
                    <button className="text-white bg-secondary py-2 px-4 rounded-md uppercase font-semibold text-xs transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-main" type="submit">
                        Send Message
                    </button>
                    <div>
                        {fetching &&
                            <div className="w-4 h-4 border-b-2 border-secondary rounded-full animate-spin"></div>
                        }
                    </div>
                    <div>
                        {message && severity === "success" &&
                            <h4 className="flex items-center gap-2 text-green-600 font-semibold"><Icon icon="ep:success-filled" /> Message sent successfully!</h4>
                        }
                        {message && severity === "error" &&
                            <h4 className="flex items-center gap-2 text-red-600 font-semibold"><Icon icon="bxs:error" /> Message sent successfully!</h4>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;