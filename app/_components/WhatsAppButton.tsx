import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton({ phone }: { phone: string }) {
  // Normalize: Add +27 if needed
  const normalizePhone = (raw: string) => {
    const digits = raw.replace(/\D/g, "")

    if (digits.length === 9) {
      // Assume it's missing SA code
      return `27${digits}`
    }
    if (digits.startsWith("0")) return `27${digits.slice(1)}`
    if (digits.startsWith("27")) return digits
    return digits
  }

  const waNumber = normalizePhone(phone)
  const waLink = `https://wa.me/${waNumber}`

  return (
    <Button
      asChild
      className="bg-rose-600 hover:bg-rose-700 text-white flex items-center gap-2"
    >
      <a href={waLink} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-4 h-4" />
        Chat on WhatsApp
      </a>
    </Button>
  )
}
