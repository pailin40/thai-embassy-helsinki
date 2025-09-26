import { Shield, FileText, Users, Stamp, Phone, Mail, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
                  <Button className="w-full">Book Appointment</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Appointment Information */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Appointment Guidelines</h2>
              <Card className="shadow-card">
                <CardContent className="p-6">
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
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Online appointment booking is recommended to avoid waiting times. 
                      Walk-in services are limited and subject to availability.
                    </p>
                    <Button className="w-full">Book Online Appointment</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          {contact.type.includes("Email") ? (
                            <Mail className="h-6 w-6 text-primary" />
                          ) : (
                            <Phone className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{contact.type}</h3>
                          <p className="text-primary font-mono">{contact.contact}</p>
                          <p className="text-sm text-muted-foreground">{contact.hours}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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

        {/* Call to Action */}
        <section className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book an appointment or contact us for more information about our consular services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Book Appointment</Button>
            <Button size="lg" variant="outline">Download Forms</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsularServices;