import { ArrowRight, FileText, Users, Shield, Clock, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/thai-embassy-hero.jpg";
import thailandScenic from "@/assets/thailand-scenic.jpg";

const LandingPage = () => {
  const services = [
    {
      icon: FileText,
      title: "Visa Applications",
      description: "Tourist, business, and transit visas for travel to Thailand",
      link: "/visa-services"
    },
    {
      icon: Users,
      title: "Consular Services",
      description: "Passport services, document authentication, and citizen assistance",
      link: "/consular-services"
    },
    {
      icon: Shield,
      title: "Emergency Support",
      description: "24/7 assistance for Thai nationals in distress",
      link: "/contact"
    }
  ];

  const quickLinks = [
    "Visa Application Forms",
    "Required Documents",
    "Appointment Booking",
    "Processing Times",
    "Fee Schedule",
    "Embassy News"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-hero-gradient text-primary-foreground py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(30, 64, 175, 0.8)), url(${heroImage})`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Royal Thai Embassy
              <span className="block text-3xl md:text-4xl font-normal mt-2">Helsinki, Finland</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Your gateway to Thailand. Professional visa and consular services
              for Finnish residents and international travelers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/visa-services">
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
                  Apply for Visa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/consular-services">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive diplomatic and consular services to support your travel and business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Office Hours & Contact */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Visit Us</h3>
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 - 12:00, 13:00 - 16:00</p>
                          <p>Visa Section: 9:00 - 11:30 (Mon-Fri)</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Embassy Locations</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-foreground text-sm">Chancery</h5>
                        <p className="text-muted-foreground text-sm">
                          Lönnrotinkatu 7 B 12<br />
                          00120 Helsinki
                        </p>
                        <p className="text-sm text-primary">Tel: +358 96 122 6400</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground text-sm">Consular Services</h5>
                        <p className="text-muted-foreground text-sm">
                          Lönnrotin Puistikko 5 A 2<br />
                          00120 Helsinki
                        </p>
                        <p className="text-sm text-primary">Tel: +358 96 122 6415</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Map
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Contact by Email</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium text-foreground">Visa Information</div>
                        <a href="mailto:visa@thaiembassy.fi" className="text-primary hover:underline">
                          visa@thaiembassy.fi
                        </a>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Consular Affairs</div>
                        <a href="mailto:consular@thaiembassy.fi" className="text-primary hover:underline">
                          consular@thaiembassy.fi
                        </a>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">ID & Passport</div>
                        <a href="mailto:idpassport@thaiembassy.fi" className="text-primary hover:underline">
                          idpassport@thaiembassy.fi
                        </a>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Chancery</div>
                        <a href="mailto:chancery@thaiembassy.fi" className="text-primary hover:underline">
                          chancery@thaiembassy.fi
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Links</h3>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-foreground font-medium">{link}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button className="w-full">
                      View All Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Going to Thailand Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Going to Thailand?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Everything you need to know for your journey to Thailand. From visa requirements to travel guides, we've got you covered.
              </p>
              
              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link to="/visit-thailand">
                  <Button size="lg" className="w-full h-14 text-left justify-start bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all">
                    <FileText className="mr-3 h-5 w-5" />
                    Tourist Visa Requirements
                  </Button>
                </Link>
                <Link to="/visit-thailand">
                  <Button size="lg" className="w-full h-14 text-left justify-start bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all">
                    <Shield className="mr-3 h-5 w-5" />
                    View COVID Rules
                  </Button>
                </Link>
                <Link to="/visit-thailand">
                  <Button size="lg" className="w-full h-14 text-left justify-start bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all">
                    <ExternalLink className="mr-3 h-5 w-5" />
                    Download Travel Guide
                  </Button>
                </Link>
              </div>
              
              {/* Bottom Row - Smaller Buttons */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <Button size="lg" className="h-12 text-sm text-left justify-start bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all">
                  <Clock className="mr-2 h-4 w-4" />
                  Processing Time
                </Button>
                <Button size="lg" className="h-12 text-sm text-left justify-start bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all">
                  <FileText className="mr-2 h-4 w-4" />
                  Visa Fees
                </Button>
                <Button size="lg" className="h-12 text-sm text-left justify-start bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-red-500 hover:border-red-500 transition-all">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Document Checklist
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={thailandScenic} 
                  alt="Beautiful Thai temple and landscape" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Announcements Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Latest Updates</h3>
            <p className="text-muted-foreground">Stay informed with our latest news and announcements</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Announcements */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <ExternalLink className="mr-2 h-5 w-5 text-primary" />
                Official Announcements
              </h4>
              <div className="space-y-4">
                <Card className="shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">March 15, 2024</div>
                    <h5 className="font-semibold text-foreground mb-2">New Visa Application Process</h5>
                    <p className="text-sm text-muted-foreground mb-3">Updated procedures for tourist visa applications effective immediately.</p>
                    <Button variant="link" className="p-0 h-auto text-primary">Read more →</Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">March 10, 2024</div>
                    <h5 className="font-semibold text-foreground mb-2">Holiday Schedule Update</h5>
                    <p className="text-sm text-muted-foreground mb-3">Embassy closure dates for upcoming Thai holidays.</p>
                    <Button variant="link" className="p-0 h-auto text-primary">Read more →</Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">March 5, 2024</div>
                    <h5 className="font-semibold text-foreground mb-2">Enhanced Security Measures</h5>
                    <p className="text-sm text-muted-foreground mb-3">New security protocols for embassy visits.</p>
                    <Button variant="link" className="p-0 h-auto text-primary">Read more →</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Embassy News */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary" />
                Embassy News
              </h4>
              <div className="space-y-4">
                <Card className="shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">March 12, 2024</div>
                    <h5 className="font-semibold text-foreground mb-2">Thai Cultural Festival 2024</h5>
                    <p className="text-sm text-muted-foreground mb-3">Join us for the annual Thai cultural celebration in Helsinki.</p>
                    <Button variant="link" className="p-0 h-auto text-primary">Learn more →</Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">March 8, 2024</div>
                    <h5 className="font-semibold text-foreground mb-2">Trade Mission Success</h5>
                    <p className="text-sm text-muted-foreground mb-3">Finnish-Thai business delegation strengthens bilateral relations.</p>
                    <Button variant="link" className="p-0 h-auto text-primary">Learn more →</Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">March 3, 2024</div>
                    <h5 className="font-semibold text-foreground mb-2">Student Exchange Program</h5>
                    <p className="text-sm text-muted-foreground mb-3">New opportunities for Finnish students to study in Thailand.</p>
                    <Button variant="link" className="p-0 h-auto text-primary">Learn more →</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-accent/5 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Emergency Assistance</h3>
            <p className="text-muted-foreground mb-6">
              For urgent matters outside office hours, Thai nationals can contact our emergency hotline.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent-hover">
              Emergency Contact: +358 96 122 6400
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;