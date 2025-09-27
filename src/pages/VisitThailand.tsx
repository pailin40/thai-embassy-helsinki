import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Thermometer, 
  Car, 
  Camera, 
  Heart, 
  Utensils, 
  Phone, 
  Shield,
  Clock,
  Plane,
  MessageCircle
} from "lucide-react";
import thailandScenic from "@/assets/thailand-scenic.jpg";

const VisitThailand = () => {
  const destinations = [
    {
      name: "Bangkok",
      description: "Thailand's vibrant capital city with temples, markets, and modern attractions",
      highlights: ["Grand Palace", "Wat Pho", "Chatuchak Market", "Khao San Road"]
    },
    {
      name: "Chiang Mai",
      description: "Cultural hub in northern Thailand with ancient temples and mountain landscapes",
      highlights: ["Old City Temples", "Night Markets", "Elephant Sanctuaries", "Doi Suthep"]
    },
    {
      name: "Phuket",
      description: "Thailand's largest island with pristine beaches and vibrant nightlife",
      highlights: ["Patong Beach", "Old Town", "Big Buddha", "Island Hopping"]
    },
    {
      name: "Krabi",
      description: "Stunning limestone cliffs, clear waters, and tropical islands",
      highlights: ["Railay Beach", "Phi Phi Islands", "Emerald Pool", "Tiger Cave Temple"]
    }
  ];

  const culturalTips = [
    {
      title: "Temple Etiquette",
      description: "Dress modestly, remove shoes, and be respectful in Buddhist temples"
    },
    {
      title: "Thai Greetings",
      description: "Use the 'wai' greeting by pressing palms together and bowing slightly"
    },
    {
      title: "Monarchy Respect",
      description: "Show proper respect for the Thai royal family and national symbols"
    },
    {
      title: "Tipping Culture",
      description: "Tipping is appreciated but not mandatory; 10% in restaurants is common"
    }
  ];

  const seasons = [
    {
      season: "Cool Season",
      months: "November - February",
      weather: "Dry and cool, perfect for travel",
      temp: "20-30°C"
    },
    {
      season: "Hot Season",
      months: "March - May", 
      weather: "Very hot and dry",
      temp: "30-40°C"
    },
    {
      season: "Rainy Season",
      months: "June - October",
      weather: "Humid with afternoon showers",
      temp: "25-35°C"
    }
  ];

  const essentialPhrases = [
    { thai: "สวัสดี", phonetic: "Sa-wat-dee", english: "Hello/Goodbye" },
    { thai: "ขอบคุณ", phonetic: "Kob-kun", english: "Thank you" },
    { thai: "ขอโทษ", phonetic: "Kor-tot", english: "Excuse me/Sorry" },
    { thai: "ไม่เป็นไร", phonetic: "Mai pen rai", english: "No problem/You're welcome" },
    { thai: "เท่าไหร่", phonetic: "Tao-rai", english: "How much?" },
    { thai: "ช่วยได้ไหม", phonetic: "Chuay dai mai", english: "Can you help?" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={thailandScenic} 
          alt="Beautiful Thailand landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Visit Thailand</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Discover the Land of Smiles - Your Complete Guide to Thailand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Calendar className="mr-2 h-5 w-5" />
                Plan Your Trip
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Camera className="mr-2 h-5 w-5" />
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From bustling cities to pristine beaches, Thailand offers something for every traveler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {destination.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium text-sm text-foreground">Top Attractions:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary">{highlight}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Best Time to Visit */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              When to Visit Thailand
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding Thailand's seasons will help you plan the perfect trip
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {seasons.map((season, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{season.season}</CardTitle>
                  <p className="text-muted-foreground font-medium">{season.months}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{season.weather}</p>
                  <Badge variant="outline">{season.temp}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Cultural Etiquette & Tips
              </h2>
              <div className="space-y-6">
                {culturalTips.map((tip, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Essential Thai Phrases */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Essential Thai Phrases
              </h2>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {essentialPhrases.map((phrase, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageCircle className="h-4 w-4 text-primary" />
                          <span className="text-lg font-medium text-foreground">{phrase.thai}</span>
                        </div>
                        <p className="text-muted-foreground ml-6">{phrase.phonetic}</p>
                        <p className="text-sm text-muted-foreground ml-6 italic">{phrase.english}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation & Emergency */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Transportation */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Getting Around Thailand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Domestic Flights</p>
                      <p className="text-sm text-muted-foreground">Convenient for long distances</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Taxis & Tuk-tuks</p>
                      <p className="text-sm text-muted-foreground">Available in all major cities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">BTS/MRT</p>
                      <p className="text-sm text-muted-foreground">Efficient public transport in Bangkok</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <span className="font-medium text-foreground">Tourist Police</span>
                    <span className="text-destructive font-bold">1155</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <span className="font-medium text-foreground">General Emergency</span>
                    <span className="text-destructive font-bold">191</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="font-medium text-foreground">Finnish Embassy Bangkok</span>
                    <span className="text-primary font-bold">+66 2 252 7900</span>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Thai Embassy Helsinki
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitThailand;