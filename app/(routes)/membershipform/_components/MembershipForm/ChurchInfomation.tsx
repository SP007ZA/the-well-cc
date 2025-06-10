/* eslint-disable */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useEffect, useState } from 'react'
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

           const handleChange = (field: string, value: string | boolean) => {
           
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

    const handleBlur = (field: string) => {
    const error:any = validateField(field, form[field as keyof typeof form]);
    setErrors((prev:any) => ({ ...prev, [field]: error }));

  };

 useEffect(() => {
setForm({ ...form, dateOfSalvation: `${date}` });
 },[date])



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

const next:any = () => setSection((prev:any) => prev + 1);
const prev:any = () => {setSection((prev:any) => prev - 1); setErrors({})};

  return (
     <>
     <label className="block font-semibold text-center mb-2">Church Information</label>
       <label className="block font-medium mb-1">Pastor's Name</label>
            <Input placeholder="Pastor's Name" name="pastorsName" className={errors.pastorsName ? "border-red-500" : ""} onChange={(e) => handleChange("pastorsName", e.target.value)} onBlur={() => handleBlur("pastorsName")}  />
            <label className="block font-medium mb-1">Church Name & Address</label>
            <Textarea placeholder="Church Name & Address" name="churchNameAddress" className={errors.churchNameAddress ? "border-red-500" : ""} onChange={(e) => handleChange("churchNameAddress", e.target.value)} onBlur={() => handleBlur("churchNameAddress")}  />
            <label className="block font-medium mb-1">Church Contact Number</label>
              <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-sm">🇿🇦 +27</span>
          <input
            type="tel"
            placeholder="Enter 9-digit number"
            maxLength={9}
            value={form.churchContact}
            onChange={(e) => handleChange("churchContact", e.target.value.replace(/\D/g, ""))}
            onBlur={() => handleBlur("churchContact")}
            className={`w-full pl-16 border px-3 py-2 rounded ${
              errors.churchContact ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {errors.churchContact && <p className="text-red-500 text-sm mt-1">{errors.churchContact}</p>}
     <label className="block font-medium mb-1">Date Of Salvation</label>
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
            onSelect={(selectedDate) => {
                if (selectedDate) {
            setDate(selectedDate);
            }
            }}
            month={month}
            onMonthChange={setMonth}
            components={{
              Caption: () => (
                <CustomCaption displayMonth={month} onChange={setMonth} />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
    
            <label className="block mt-4">Correspondence Preference:</label>
           
            <select name="correspondencePreference" onChange={(e) => handleChange("correspondencePreference", e.target.value)} className="w-full border p-2 rounded">
              <option value="email">Email</option>
              <option value="whatsApp">WhatsApp</option>
              <option value="both">Both</option>
            </select>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
  )
}

export default ChurchInfomation