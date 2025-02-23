"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
  message: z.string().min(1, {
    message: "This field has to be filled.",
  }),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);

      const res = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      console.log({ resData });
      if (resData.statusCode === 403) {
        throw new Error("validation_error");
      }
      toast({
        title: "Success!",
        description: "Message sent successfully!",
      });
      form.resetField("name");
      form.resetField("email");
      form.resetField("message");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error!",
        description: "Error while sending message!",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:w-2/3 sm:space-y-6 space-y-4 basis-1/2"
        autoComplete="off"
      >
        <div className="flex sm:flex-row flex-col justify-between sm:gap-8 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Message" {...field} className="resize-none" rows={6} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button disabled={isLoading} type="submit" className="rounded-lg">
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
