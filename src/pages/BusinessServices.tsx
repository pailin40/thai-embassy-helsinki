import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Globe,
  Handshake,
  FileText,
  Users,
  Award,
  Building,
  Briefcase,
  DollarSign,
  BarChart3,
  Calendar,
  Mail,
  Phone,
  Download,
  ExternalLink,
  CheckCircle,
  Clock,
} from "lucide-react";

const BusinessServices = () => {
  const businessServices = [
    {
      title: "Trade Promotion",
      description:
        "Facilitating business connections between Finnish and Thai companies",
      icon: TrendingUp,
      features: [
        "Market research support",
        "Trade mission coordination",
        "B2B matchmaking",
        "Export assistance",
      ],
    },
    {
      title: "Investment Facilitation",
      description:
        "Supporting Finnish investments in Thailand and Thai investments in Finland",
      icon: DollarSign,
      features: [
        "Investment guidance",
        "Legal framework assistance",
        "BOI coordination",
        "Joint venture support",
      ],
    },
    {
      title: "Business Visa Services",
      description:
        "Specialized visa services for business travelers and investors",
      icon: Globe,
      features: [
        "Multiple entry visas",
        "Expedited processing",
        "Corporate packages",
        "Extension services",
      ],
    },
    {
      title: "Documentation Services",
      description: "Authentication and certification of business documents",
      icon: FileText,
      features: [
        "Document legalization",
        "Certificate of origin",
        "Commercial invoices",
        "Consular authentication",
      ],
    },
  ];

  const tradeSectors = [
    {
      sector: "Technology & Innovation",
      opportunities: [
        "Software development",
        "Fintech solutions",
        "Clean technology",
        "Digital services",
      ],
      description:
        "Growing demand for Finnish tech expertise in Thailand's digital transformation",
    },
    {
      sector: "Manufacturing",
      opportunities: [
        "Machinery & equipment",
        "Paper & pulp",
        "Chemicals",
        "Automotive parts",
      ],
      description:
        "Strong Finnish manufacturing capabilities complement Thai production networks",
    },
    {
      sector: "Food & Agriculture",
      opportunities: [
        "Organic products",
        "Food processing",
        "Sustainable farming",
        "Aquaculture",
      ],
      description:
        "Premium Finnish food products finding new markets in Thailand",
    },
    {
      sector: "Energy & Environment",
      opportunities: [
        "Renewable energy",
        "Waste management",
        "Water treatment",
        "Smart cities",
      ],
      description:
        "Finnish environmental solutions supporting Thailand's sustainability goals",
    },
  ];

  const investmentIncentives = [
    {
      title: "Board of Investment (BOI)",
      description: "Thai government incentives for foreign investors",
      benefits: [
        "Tax holidays up to 8 years",
        "Import duty exemptions",
        "Land ownership rights",
        "Work permit facilitation",
      ],
    },
    {
      title: "Business Finland",
      description: "Finnish government support for international expansion",
      benefits: [
        "Funding for market entry",
        "Export financing",
        "Risk insurance",
        "Advisory services",
      ],
    },
    {
      title: "Eastern Economic Corridor (EEC)",
      description: "Special economic zone with enhanced incentives",
      benefits: [
        "Additional tax benefits",
        "Fast-track permits",
        "Infrastructure support",
        "One-stop service center",
      ],
    },
  ];

  const upcomingEvents = [
    {
      date: "March 15, 2024",
      event: "Finnish-Thai Business Forum",
      location: "Helsinki",
      description:
        "Annual networking event connecting business leaders from both countries",
    },
    {
      date: "April 22, 2024",
      event: "Thailand Investment Seminar",
      location: "Embassy premises",
      description:
        "Information session on investment opportunities in Thailand",
    },
    {
      date: "May 10, 2024",
      event: "Digital Economy Workshop",
      location: "Virtual event",
      description:
        "Exploring digital transformation opportunities in Southeast Asia",
    },
  ];

  const businessVisaTypes = [
    {
      type: "Non-Immigrant B Visa",
      purpose: "Business meetings, negotiations, conferences",
      validity: "90 days",
      processing: "3-5 business days",
    },
    {
      type: "Multiple Entry Business Visa",
      purpose: "Frequent business travel",
      validity: "1 year",
      processing: "5-7 business days",
    },
    {
      type: "Investment Visa",
      purpose: "Investment projects, BOI applications",
      validity: "1 year",
      processing: "7-10 business days",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Business Services
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Facilitating trade, investment, and business partnerships between
              Finland and Thailand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Handshake className="mr-2 h-5 w-5" />
                Schedule Business Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Services Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Business Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for businesses looking to expand into Thai
              and Finnish markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessServices.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Opportunities */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Trade Sectors
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore promising business opportunities between Finland and
              Thailand
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tradeSectors.map((sector, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    {sector.sector}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {sector.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium text-sm text-foreground">
                      Key Opportunities:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sector.opportunities.map((opportunity, idx) => (
                        <Badge key={idx} variant="secondary">
                          {opportunity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Incentives */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investment Incentives
            </h2>
            <p className="text-lg text-muted-foreground">
              Government support programs to facilitate international business
              expansion
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {investmentIncentives.map((incentive, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-center">
                    {incentive.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">
                    {incentive.description}
                  </p>
                  <div className="space-y-2">
                    {incentive.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Visa Services */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Business Visa Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Streamlined visa processing for business travelers, investors,
                and entrepreneurs
              </p>

              <div className="space-y-6">
                {businessVisaTypes.map((visa, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {visa.type}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {visa.purpose}
                          </p>
                        </div>
                        <Badge variant="outline">{visa.validity}</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        Processing time: {visa.processing}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Button className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Apply for Business Visa
                </Button>
              </div>
            </div>

            {/* Contact & Events */}
            <div className="space-y-8">
              {/* Commercial Attaché Contact */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Commercial Attaché Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">
                          Mr. Narong Thanakit
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Commercial Attaché
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground text-sm">
                          commercial@tembassy.fi
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">
                          Direct Line
                        </p>
                        <p className="text-muted-foreground text-sm">
                          +358 44 444 4444 ext. 205
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Business Meeting
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Business Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-primary/20 pl-4"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {event.date}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-foreground">
                          {event.event}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {event.location}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {event.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View All Events
                    </Button>
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

export default BusinessServices;
