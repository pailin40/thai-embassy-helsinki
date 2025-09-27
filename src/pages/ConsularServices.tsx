import { Shield, FileText, Users, Stamp, Phone, Mail, AlertTriangle, CheckCircle, Download, MessageCircle, HelpCircle, Clock, CreditCard, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ConsularServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Passport Services",
      description: "New passport applications, renewals, and replacements for Thai citizens",
      details: [
        "New passport application",
        "Passport renewal",
        "Lost/stolen passport replacement",
        "Emergency travel documents"
      ],
      fee: "€120 - €180",
      processing: "4-6 weeks",
      badge: "For Thai Citizens"
    },
    {
      icon: Stamp,
      title: "Document Authentication",
      description: "Legalization and notarization of official documents",
      details: [
        "Educational certificates",
        "Birth/marriage certificates",
        "Commercial documents",
        "Legal documents"
      ],
      fee: "€30 - €50",
      processing: "3-5 working days",
      badge: null
    },
    {
      icon: Users,
      title: "Civil Registration",
      description: "Registration of births, marriages, and other civil status changes",
      details: [
        "Birth registration",
        "Marriage registration",
        "Name change registration",
        "Citizenship matters"
      ],
      fee: "€40 - €80",
      processing: "1-2 weeks",
      badge: null
    },
    {
      icon: Phone,
      title: "Emergency Assistance",
      description: "24/7 support for Thai nationals in emergency situations",
      details: [
        "Lost passport assistance",
        "Medical emergencies",
        "Legal trouble support",
        "Repatriation assistance"
      ],
      fee: "Varies",
      processing: "Immediate",
      badge: "24/7 Available"
    }
  ];

  const emergencyContacts = [
    {
      type: "Embassy Main Line",
      contact: "+358 9 477 030",
      hours: "Mon-Fri 9:00-16:00"
    },
    {
      type: "Emergency Hotline",
      contact: "+358 50 123 4567",
      hours: "24/7 for Thai nationals"
    },
    {
      type: "Consular Email",
      contact: "consular@thaiembassy.fi",
      hours: "Response within 24h"
    }
  ];

  const appointmentTypes = [
    {
      service: "Passport Services",
      duration: "30 minutes",
      requirement: "Required"
    },
    {
      service: "Document Authentication",
      duration: "15 minutes",
      requirement: "Recommended"
    },
    {
      service: "Civil Registration",
      duration: "45 minutes",
      requirement: "Required"
    },
    {
      service: "General Inquiry",
      duration: "15 minutes",
      requirement: "Walk-in accepted"
    }
  ];

  const serviceGuideSteps = [
    {
      icon: CheckCircle,
      title: "Eligibility check",
      description: "Verify if you meet the requirements for the consular service",
      notes: [
        "• Thai citizenship required for passport services",
        "• Valid ID or passport needed",
        "• Check document expiry dates",
        "• Verify residency status if applicable"
      ]
    },
    {
      icon: FileText,
      title: "Required documents",
      description: "Prepare all necessary documents and forms",
      notes: [
        "• Download forms from embassy website",
        "• Original + photocopies required",
        "• Passport photos (recent, white background)",
        "• Finnish translations if needed"
      ]
    },
    {
      icon: Send,
      title: "Submission process",
      description: "Submit your documents via email or in-person appointment",
      notes: [
        "• Email copies first for pre-approval",
        "• Include legalization form with passport copy",
        "• Wait for embassy approval before visit",
        "• Bring originals to appointment"
      ]
    },
    {
      icon: MapPin,
      title: "Visit requirements",
      description: "Understand what to expect during your embassy visit",
      notes: [
        "• Arrive 10 minutes early",
        "• Bring all original documents",
        "• Valid ID required for entry",
        "• No large bags or electronics allowed"
      ]
    },
    {
      icon: CreditCard,
      title: "Fees and payment",
      description: "Learn about service fees and payment methods",
      notes: [
        "• Cash (Euros) or major cards accepted",
        "• Payment required at service time",
        "• No refunds for cancelled applications",
        "• Check current fee schedule online"
      ]
    },
    {
      icon: Clock,
      title: "Processing time",
      description: "Know how long your application will take to process",
      notes: [
        "• Passport: 4-6 weeks standard",
        "• Document auth: 3-5 working days",
        "• Emergency services: same day possible",
        "• Delays possible during peak seasons"
      ]
    },
    {
      icon: Mail,
      title: "How you receive your result",
      description: "Understand how and when you'll receive your processed documents",
      notes: [
        "• Email notification when ready",
        "• Collection by appointment only",
        "• ID required for document pickup",
        "• Authorized representative needs written permission"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How long does document authentication take?",
      answer: "Document authentication typically takes 3-5 working days. Processing times may vary depending on the complexity of the documents and current workload."
    },
    {
      question: "Can I submit documents by mail?",
      answer: "For security reasons, original documents must be submitted in person during your appointment. However, you can email copies for initial review."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash (Euros) and major credit/debit cards. Please note that fees must be paid at the time of service."
    },
    {
      question: "Do I need an appointment for all services?",
      answer: "Appointments are required for passport services and civil registration. Document authentication is recommended by appointment but walk-ins may be accepted based on availability."
    },
    {
      question: "Can someone else collect my documents?",
      answer: "Only the applicant or authorized representative with proper documentation can collect processed documents. A written authorization letter is required for representatives."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Consular Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consular services for Thai citizens living in Finland and travelers. 
            We provide assistance with documentation, civil registration, and emergency support.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="mb-12">
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Emergency Assistance Available</h3>
                  <p className="text-muted-foreground mb-2">
                    Thai nationals facing emergencies can contact our 24/7 hotline for immediate assistance.
                  </p>
                  <Button size="sm" className="bg-accent hover:bg-accent-hover">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency: +358 50 123 4567
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 relative">
                {service.badge && (
                  <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Fee</p>
                      <p className="font-semibold text-primary">{service.fee}</p>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Processing</p>
                      <p className="font-semibold text-foreground">{service.processing}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">Services Include:</p>
                    <ul className="space-y-1">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Appointment Booking Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How to Book an Appointment</h2>
          <Card className="shadow-card bg-accent/5 border-accent/20 mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <AlertTriangle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Important Notice</h3>
                <p className="text-lg text-foreground font-medium">Please make appointment before visiting the Embassy.</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-background/80 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Step 1: Document Preparation</h4>
                  <p className="text-muted-foreground mb-4">
                    Please send the document that you need to legalized and Legalization form with a copy of 
                    passport to <strong className="text-primary">consular@thaiembassy.fi</strong> for prior approval by e-mail.
                  </p>
                  <Button variant="outline" className="mb-3">
                    <Download className="mr-2 h-4 w-4" />
                    Check Document Preparation
                  </Button>
                </div>
                
                <div className="bg-background/80 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Step 2: Approval & Appointment</h4>
                  <p className="text-muted-foreground">
                    After approval, you will get appointment to visit the embassy.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">Need help? Use the Quick Actions section below for forms and support.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Complete Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Complete Application Process</h2>
          
          {/* Service Guide Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-start">
            {serviceGuideSteps.map((step, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer group h-fit">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  
                  {/* Notes that appear on hover */}
                  <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-48 group-hover:mt-4">
                    <div className="text-left bg-secondary/30 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <div className="space-y-1">
                        {step.notes.map((note, noteIndex) => (
                          <p key={noteIndex} className="text-xs text-muted-foreground">{note}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Appointment Requirements */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Appointment Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointmentTypes.map((apt, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                      <div>
                        <p className="font-medium text-foreground">{apt.service}</p>
                        <p className="text-sm text-muted-foreground">{apt.duration}</p>
                      </div>
                      <Badge variant={apt.requirement === "Required" ? "default" : "secondary"}>
                        {apt.requirement}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Email for Appointment
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Forms
                </Button>
                <Button className="w-full" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">

          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {contact.type.includes("Email") ? (
                      <Mail className="h-6 w-6 text-primary" />
                    ) : (
                      <Phone className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.type}</h3>
                  <p className="text-primary font-mono mb-1">{contact.contact}</p>
                  <p className="text-sm text-muted-foreground">{contact.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Documents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Required Documents</h2>
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">For Thai Citizens</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Valid Thai ID card or passport</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Finnish residence permit (if applicable)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Completed application forms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Passport-sized photographs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">General Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Original documents + photocopies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Finnish translations (certified)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Service fees (cash or card)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Proof of Finnish address</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Email your documents for approval or contact us for more information about our consular services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Email for Appointment
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Forms
            </Button>
            <Button size="lg" variant="outline">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsularServices;