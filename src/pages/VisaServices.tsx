import { FileText, Clock, CreditCard, CheckCircle, AlertCircle, Download, Phone, Calendar, HelpCircle, Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const VisaServices = () => {
  const visaTypes = [
    {
      type: "Tourist Visa",
      duration: "60 days",
      processing: "3-5 working days",
      fee: "€35",
      description: "For leisure travel and tourism purposes",
      requirements: ["Passport valid for 6+ months", "Return flight ticket", "Hotel reservation", "Bank statement"],
      badge: "Most Popular"
    },
    {
      type: "Business Visa",
      duration: "90 days",
      processing: "5-7 working days",
      fee: "€45",
      description: "For business meetings and conferences",
      requirements: ["Business invitation letter", "Company registration", "Hotel reservation", "Travel insurance"],
      badge: null
    },
    {
      type: "Transit Visa",
      duration: "72 hours",
      processing: "2-3 working days",
      fee: "€25",
      description: "For airport transit through Thailand",
      requirements: ["Onward flight ticket", "Visa for final destination", "Transit itinerary"],
      badge: "Fast Track"
    }
  ];

  const generalRequirements = [
    "Completed visa application form",
    "Original passport with at least 6 months validity",
    "One recent passport-sized photograph",
    "Proof of financial means (bank statement)",
    "Flight itinerary or confirmed booking",
    "Accommodation booking confirmation"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Check Visa Requirements",
      description: "Check the visa requirements from the Embassy's website",
      link: "https://thaievisa.go.th/static/English-Manual.pdf",
      linkText: "E-visa user manual in English"
    },
    {
      step: 2,
      title: "Submit Online Application",
      description: "Submit visa application form online (all visas must be submitted here)",
      link: "https://thaievisa.go.th",
      linkText: "Apply at thaievisa.go.th"
    },
    {
      step: 3,
      title: "Timing Guidelines",
      description: "Apply 4-8 weeks before travel date. Do NOT submit more than 3 months before departure"
    },
    {
      step: 4,
      title: "Provide Genuine Documents",
      description: "Provide authentic documents and information. False documents will result in rejection and travel prohibition"
    },
    {
      step: 5,
      title: "Processing & Collection",
      description: "7 working days processing time. You'll receive email approval when visa is granted"
    }
  ];

  const importantNotices = [
    "The Royal Thai Embassy Helsinki processes visas only when applicant is physically in Finland/Estonia",
    "Processing time is 7 working days for completed documents (may take longer in certain cases)",
    "Applicants receive e-mail approval once visa is granted",
    "Embassy reserves right to request additional documents/interview and reject applications",
    "For inquiries: visa@thaiembassy.fi"
  ];

  const faqItems = [
    {
      question: "How long does visa processing take?",
      answer: "Standard processing time is 7 working days from when we receive complete documents. Processing may take longer in certain cases or during peak seasons."
    },
    {
      question: "Can I apply if I'm not in Finland?",
      answer: "No, the Royal Thai Embassy Helsinki only processes visa applications when the applicant is physically present in Finland or Estonia."
    },
    {
      question: "When should I apply for my visa?",
      answer: "We recommend applying 4-8 weeks before your travel date. Do not submit your application more than 3 months before your departure date."
    },
    {
      question: "What happens if I submit false documents?",
      answer: "Applications with false documents or information will be rejected and reported. This may result in future prohibition from entering Thailand."
    },
    {
      question: "How will I know when my visa is approved?",
      answer: "You will receive an email notification once your visa is granted. The embassy will contact you for document collection."
    },
    {
      question: "Can the embassy reject my application?",
      answer: "Yes, the embassy reserves the right to reject any application without prejudice and may request additional documents or an in-person interview."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Visa Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Apply for Thai visas with professional guidance. We offer comprehensive visa services 
            for tourism, business, and transit purposes.
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-12">
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Important Processing Information</h3>
                  <ul className="space-y-3">
                    {importantNotices.map((notice, index) => (
                      <li key={index} className="flex items-start space-x-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span>{notice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Visa Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card className="shadow-card hover:shadow-elegant transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">Download Forms</h3>
                <p className="text-sm text-muted-foreground">Get application forms and checklists</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Search className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">Check Visa Type</h3>
                <p className="text-sm text-muted-foreground">Find the right visa for your trip</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">Book Appointment</h3>
                <p className="text-sm text-muted-foreground">Schedule your embassy visit</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground">Get help with your application</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">FAQ</h3>
                <p className="text-sm text-muted-foreground">Common questions answered</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visa Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Visa Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 relative">
                {visa.badge && (
                  <Badge className="absolute -top-3 left-4 bg-accent text-accent-foreground">
                    {visa.badge}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{visa.type}</CardTitle>
                  <p className="text-muted-foreground">{visa.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{visa.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Processing</p>
                      <p className="font-semibold text-foreground">{visa.processing}</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Visa Fee</p>
                    <p className="text-2xl font-bold text-primary">{visa.fee}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">Key Requirements:</p>
                    <ul className="space-y-1">
                      {visa.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => window.open('https://thaievisa.go.th', '_blank')}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Step-by-Step Application Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  {step.link && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(step.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {step.linkText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* General Requirements */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">General Requirements</h2>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {generalRequirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Download Forms</h2>
              <div className="space-y-4">
                <Card className="shadow-card hover:shadow-elegant transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Visa Application Form</h3>
                          <p className="text-sm text-muted-foreground">PDF - 2.3 MB</p>
                        </div>
                      </div>
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-elegant transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Document Checklist</h3>
                          <p className="text-sm text-muted-foreground">PDF - 1.1 MB</p>
                        </div>
                      </div>
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-elegant transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Fee Schedule</h3>
                          <p className="text-sm text-muted-foreground">PDF - 0.8 MB</p>
                        </div>
                      </div>
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
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
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Assistance */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Need Assistance?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our consular staff is available to help with your visa application during office hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Book Appointment</Button>
            <Button variant="outline">Call Embassy</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisaServices;