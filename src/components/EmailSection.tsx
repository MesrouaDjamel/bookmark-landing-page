"use client"
import Button from "./Button";
// import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EmailSection = () => {
  const emailFormSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Whoops, make sure it's an email" }),
  });
  type TEmailFormSchema = z.infer<typeof emailFormSchema>;
  const { register, handleSubmit, formState: { errors } } = useForm<TEmailFormSchema>({
    resolver: zodResolver(emailFormSchema),
  })
  const onSubmit =  () => {
    
  }
  return (
    <div className="bg-softBlue px-7 sm:px-20 xl:px-40 2xl:px-96  ">
      <div className="pt-16 pb-7">
        <p className="text-center text-white uppercase text-xl leading-loose">
          35,000+ already joined.
        </p>
        <h2 className="text-white font-semibold text-3xl pb-5 text-center">
          Stay up-to-date with what we&apos;re doing
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row md:justify-center gap-5 pb-14 "
      >
        {/* <Input
          {...register("email")}
          // register={register}
          placeholder="Enter your email address"
          className="rounded-lg  px-4 py-4 text-veryDarkBlue "
        /> */}
        <div
          className={`sm:min-w-[350px] relative ${
            errors.email && "bg-softRed rounded-lg p-1"
          } flex flex-col gap-2`}
        >
          <input
            type="text"
            {...register("email")}
            placeholder="Enter your email address"
            className={` ${
              errors.email && "outline-none"
            } rounded-lg px-4 py-4 text-veryDarkBlue `}
          />
          {errors.email && (
            <p className="text-white  px-4">{errors.email.message}</p>
          )}

          {errors.email && (
            <svg width="20" height="20" className="absolute right-4 top-5">
              <g fill="none" fillRule="evenodd">
                <circle cx="10" cy="10" r="10" fill="#FA5959" />
                <g fill="#FFF" transform="translate(9 5)">
                  <rect width="2" height="7" rx="1" />
                  <rect width="2" height="2" y="8" rx="1" />
                </g>
              </g>
            </svg>
          )}
        </div>
        <Button
          label="Contact Us"
          className="text-white text-sm font-semibold rounded-lg bg-softRed max-h-[56px] md:min-w-[120px] border-2 border-softRed hover:border-softRed hover:text-softRed hover:bg-white transition-colors ease-in-out duration-200   px-4 py-4  "
        />
      </form>
    </div>
  );
}

export default EmailSection