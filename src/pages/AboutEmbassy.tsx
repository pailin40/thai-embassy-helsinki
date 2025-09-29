import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building,
  Users,
  Globe,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Flag,
  HandHeart,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import thailandEmbassyHero from "@/assets/thai-embassy-hero.jpg";

const AboutEmbassy = () => {
  const services = [
    {
      title: "Consular Services",
      description:
        "Passport renewals, visa applications, and citizen assistance",
      icon: Building,
    },
    {
      title: "Trade Promotion",
      description:
        "Supporting Finnish-Thai business relations and trade opportunities",
      icon: Briefcase,
    },
    {
      title: "Cultural Exchange",
      description:
        "Promoting Thai culture and fostering educational partnerships",
      icon: GraduationCap,
    },
    {
      title: "Emergency Assistance",
      description:
        "24/7 support for Thai citizens in Finland and Finnish citizens in Thailand",
      icon: HandHeart,
    },
  ];

  const diplomaticHistory = [
    {
      year: "1954",
      event:
        "Establishment of diplomatic relations between Thailand and Finland",
    },
    {
      year: "1975",
      event: "Opening of the Royal Thai Embassy in Helsinki",
    },
    {
      year: "1990",
      event: "Expansion of consular services and trade promotion activities",
    },
    {
      year: "2004",
      event: "50th anniversary of diplomatic relations celebrated",
    },
    {
      year: "2024",
      event: "70 years of strong diplomatic partnership",
    },
  ];

  const embassyStaff = [
    {
      position: "Ambassador",
      name: "H.E. Siriporn Chaiyasuta",
      department: "Diplomatic Mission",
      responsibilities: "Overall embassy operations and diplomatic relations",
    },
    {
      position: "Deputy Chief of Mission",
      name: "Mr. Somchai Pattanawongsa",
      department: "Political Section",
      responsibilities: "Political affairs and bilateral cooperation",
    },
    {
      position: "Consul General",
      name: "Ms. Malee Siriwan",
      department: "Consular Section",
      responsibilities: "Consular services and citizen assistance",
    },
    {
      position: "Commercial Attaché",
      name: "Mr. Narong Thanakit",
      department: "Economic Section",
      responsibilities: "Trade promotion and economic cooperation",
    },
  ];

  const facilities = [
    {
      name: "Main Embassy Building",
      address: "Bulevardi 31, 00180 Helsinki",
      description:
        "Houses diplomatic offices, consular services, and meeting rooms",
    },
    {
      name: "Cultural Center",
      address: "Adjacent to main building",
      description:
        "Hosts cultural events, exhibitions, and educational programs",
    },
    {
      name: "Trade Office",
      address: "Integrated within embassy",
      description: "Supports business relations and trade promotion activities",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={thailandEmbassyHero}
          alt="Royal Thai Embassy in Helsinki"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <div className="flex items-center justify-center mb-6">
              <Flag className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                About Our Embassy
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Serving the Thai community in Finland and strengthening bilateral
              relations since 1975
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Users className="mr-2 h-5 w-5" />
                Meet Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Embassy Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Mission Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To represent the Kingdom of Thailand in Finland, provide
                  exceptional consular services to Thai citizens, promote
                  bilateral relations, facilitate trade and investment
                  opportunities, and foster cultural understanding between our
                  two nations while upholding the highest standards of
                  diplomatic excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Vision for the Future
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading diplomatic mission that strengthens
                  Thailand-Finland partnership through innovative diplomatic
                  initiatives, sustainable development cooperation, enhanced
                  trade relations, and vibrant cultural exchange programs that
                  benefit both nations and their peoples.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Embassy Services */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Embassy Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support for citizens and promoting bilateral
              cooperation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diplomatic History */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diplomatic History
            </h2>
            <p className="text-lg text-muted-foreground">
              70 years of friendship and cooperation between Thailand and
              Finland
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-8">
              {diplomaticHistory.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <Badge className="mb-3">{item.year}</Badge>
                        <p className="text-muted-foreground">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embassy Staff */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Embassy Leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated team serving the Thai-Finnish community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {embassyStaff.map((staff, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {staff.position}
                      </CardTitle>
                      <p className="text-primary font-medium">{staff.name}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Badge variant="secondary">{staff.department}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {staff.responsibilities}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Embassy Facilities */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Embassy Facilities
              </h2>
              <div className="space-y-6">
                {facilities.map((facility, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Building className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {facility.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {facility.address}
                          </p>
                          <p className="text-muted-foreground">
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Embassy Contact
              </h2>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-muted-foreground">
                          Bulevardi 31, 00180 Helsinki, Finland
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">
                          +358 44 444 4444
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">
                          consular@tembassy.fi
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">
                          Working Hours
                        </p>
                        <p className="text-muted-foreground">
                          Mon-Fri: 9:00-12:00, 13:00-16:00
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule an Appointment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutEmbassy;
