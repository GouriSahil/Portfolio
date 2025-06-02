
import { Mail, MessageSquare, Send, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm actively seeking internship and full-time opportunities in backend development. 
            Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">Open to remote & on-site opportunities</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Availability</h3>
                  <p className="text-gray-300">Available for immediate start</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-white font-semibold mb-4">Why Choose Me?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    Strong foundation in Python backend development
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Experience with modern frameworks (Flask, FastAPI)
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                    Proven track record with real-world projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                    Eager to learn and contribute to team success
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </div>
                <Input 
                  placeholder="Subject" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
