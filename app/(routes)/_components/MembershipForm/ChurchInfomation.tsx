import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
Popover,
PopoverContent,
PopoverTrigger,
} from "@/components/ui/popover"


const ChurchInfomation = ({form, setForm,errors, validateField, setErrors, setSection, date, setDate}:any) => {


    const [month, setMonth] = useState<Date>(new Date())

 function CustomCaption({
  displayMonth,
  onChange,
}: {
  displayMonth: Date
  onChange: (newMonth: Date) => void
}) {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)
  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "long" })
  )

  return (
    <div className="flex justify-between px-2 py-1">
      <select
        className="text-sm bg-transparent"
        value={displayMonth.getFullYear()}
        onChange={(e) => {
          const newMonth = new Date(displayMonth)
          newMonth.setFullYear(Number(e.target.value))
          onChange(newMonth)
        }}
      >
        {years.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </select>
      <select
        className="text-sm bg-transparent"
        value={displayMonth.getMonth()}
        onChange={(e) => {
          const newMonth = new Date(displayMonth)
          newMonth.setMonth(Number(e.target.value))
          onChange(newMonth)
        }}
      >
        {months.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>
    </div>
  )
}

         const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

    const handleBlur = (field: string) => {
    const error = validateField(field, form[field as keyof typeof form]);
    setErrors((prev:any) => ({ ...prev, [field]: error }));

  };
const next = () => setSection((prev:any) => prev + 1);
const prev = () => setSection((prev:any) => prev - 1);

  return (
     <>
     <label className="block font-semibold text-center mb-2">Church Information</label>
            <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`w-full justify-start text-left font-normal ${
              !date ? "text-muted-foreground" : ""
            }`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Select a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            month={month}
            onMonthChange={setMonth}
            components={{
              Caption: (props) => (
                <CustomCaption displayMonth={month} onChange={setMonth} />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
            <Input placeholder="Pastor's Name" name="pastorName" />
            <Textarea placeholder="Church Name & Address" name="church" />
            <Input placeholder="Church Contact Number" name="churchContact" />
            <label className="block mt-4">Correspondence Preference:</label>
            <div className="flex gap-4">
              <label><input type="checkbox" name="correspondence" value="email" /> Email</label>
              <label><input type="checkbox" name="correspondence" value="whatsapp" /> WhatsApp</label>
            </div>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
  )
}

export default ChurchInfomation