import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Visa Information",
      contact: "visa@tembassy.fi",
      description: "All visa applications and Thailand entry requirements",
    },
    {
      icon: Mail,
      title: "Consular Affairs & Legalization",
      contact: "consular@tembassy.fi",
      description: "Document authentication and consular services",
    },
    {
      icon: Mail,
      title: "Thai ID & Passport",
      contact: "idpassport@tembassy.fi",
      description: "Thai national ID and passport services",
    },
    {
      icon: Mail,
      title: "Chancery",
      contact: "chancery@tembassy.fi",
      description: "General embassy inquiries",
    },
  ];

  const locations = [
    {
      name: "Chancery",
      address: "Bulevardi 31 B 26",
      postal: "00180 Helsinki",
      phone: "+358 44 444 4444",
      services: "General embassy services and administration",
    },
    {
      name: "Consular Services",
      address: "Bulevardi 31 A 20",
      postal: "00180 Helsinki",
      phone: "+358 44 444 4444",
      services: "Visa applications, document services, citizen assistance",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Information
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with the Royal Thai Embassy in Helsinki. All services
            are by appointment only.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-12 border-accent bg-accent/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Important Notice
                </h3>
                <p className="text-muted-foreground">
                  All embassy services including passport, legalization, and
                  consular affairs are by email appointment only. Please contact
                  the relevant department via email to schedule your
                  appointment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Email Contacts
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-elegant transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <a
                          href={`mailto:${item.contact}`}
                          className="text-primary hover:underline font-mono text-lg block mb-2"
                        >
                          {item.contact}
                        </a>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Locations & Phone */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Office Locations
            </h2>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">
                          {location.name}
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          {location.address}
                          <br />
                          {location.postal}
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-primary font-mono">
                            {location.phone}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {location.services}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Office Hours */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Office Hours
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <p className="font-medium text-accent">
                          By Appointment Only
                        </p>
                        <p>Monday - Friday</p>
                        <p className="text-sm">(Except public holidays)</p>
                        <p className="text-sm italic mt-2">
                          All services require advance email appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <section className="mt-16 py-12 bg-accent/5 border border-accent/20 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Emergency Assistance
            </h3>
            <p className="text-muted-foreground mb-6">
              For urgent matters outside office hours, Thai nationals can
              contact our emergency hotline.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent-hover">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: +358 44 444 4444
            </Button>
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Find Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-4">
                  Chancery Office
                </h3>
                <p className="text-muted-foreground mb-4">
                  Bulevardi 31 B 26
                  <br />
                  00180 Helsinki
                </p>
                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-4">
                  Consular Office
                </h3>
                <p className="text-muted-foreground mb-4">
                  Bulevardi 31 A 12
                  <br />
                  00180 Helsinki
                </p>
                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
