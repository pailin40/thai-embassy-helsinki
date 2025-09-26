import { FileText, Clock, CreditCard, CheckCircle, AlertCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      title: "Prepare Documents",
      description: "Gather all required documents according to your visa type"
    },
    {
      step: 2,
      title: "Complete Application",
      description: "Fill out the visa application form completely and accurately"
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Visit the embassy during visa hours (9:00-11:30) or book appointment"
    },
    {
      step: 4,
      title: "Pay Fees",
      description: "Pay visa fee in cash or by card at the embassy"
    },
    {
      step: 5,
      title: "Collect Visa",
      description: "Return to collect your passport with visa or use courier service"
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
                  <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                  <p className="text-muted-foreground">
                    Visa processing times may vary during peak seasons. Please apply well in advance of your travel date. 
                    All fees are non-refundable regardless of visa approval status.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
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