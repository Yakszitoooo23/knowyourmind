import { jsPDF } from 'jspdf'

interface PDFData {
  typeName: string
  oneLiner: string
  description: string
  userName?: string
  userEmail?: string
  dateGenerated: string
}

export function generatePDF(data: PDFData): void {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const maxWidth = pageWidth - 2 * margin
  let yPosition = margin

  // Helper function to add text with word wrap
  const addText = (text: string, fontSize: number, isBold: boolean = false, color: string = '#000000') => {
    doc.setFontSize(fontSize)
    doc.setTextColor(color)
    if (isBold) {
      doc.setFont('helvetica', 'bold')
    } else {
      doc.setFont('helvetica', 'normal')
    }
    
    const lines = doc.splitTextToSize(text, maxWidth)
    lines.forEach((line: string) => {
      if (yPosition > pageHeight - 30) {
        doc.addPage()
        yPosition = margin
      }
      doc.text(line, margin, yPosition)
      yPosition += fontSize * 0.5 + 2
    })
  }

  // Title
  doc.setTextColor(37, 99, 235) // Blue color
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text('Know Your Mind', pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 15

  // Intelligence Type Name
  doc.setTextColor(30, 58, 138) // Dark blue
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text(data.typeName, pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 12

  // One Liner
  doc.setTextColor(100, 116, 139) // Gray
  doc.setFontSize(14)
  doc.setFont('helvetica', 'italic')
  doc.text(data.oneLiner, pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 20

  // Divider line
  doc.setDrawColor(200, 200, 200)
  doc.line(margin, yPosition, pageWidth - margin, yPosition)
  yPosition += 15

  // User info (if available)
  if (data.userName || data.userEmail) {
    doc.setFontSize(10)
    doc.setTextColor(100, 116, 139)
    doc.setFont('helvetica', 'normal')
    if (data.userName) {
      doc.text(`Generated for: ${data.userName}`, margin, yPosition)
      yPosition += 8
    }
    if (data.userEmail) {
      doc.text(`Email: ${data.userEmail}`, margin, yPosition)
      yPosition += 8
    }
    doc.text(`Date: ${data.dateGenerated}`, margin, yPosition)
    yPosition += 15

    // Another divider
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 15
  }

  // Description
  addText('About Your Intelligence Type', 16, true, '#1e3a8a')
  yPosition += 5
  addText(data.description, 12, false, '#000000')

  // Footer
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text(
      `Page ${i} of ${totalPages} | Know Your Mind - Intelligence Type Assessment`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    )
  }

  // Save PDF
  doc.save(`Know-Your-Mind-${data.typeName.replace(/\s+/g, '-')}-${Date.now()}.pdf`)
}
