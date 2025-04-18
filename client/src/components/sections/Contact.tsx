import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white shadow-sm rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-gray-800">Contact Me</h2>
        <div className="ml-4 h-px bg-primary flex-grow"></div>
      </div>
      
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-gray-700 mb-6">
            Feel free to reach out to me for research collaborations, academic inquiries, or professional opportunities.
            I am always interested in new challenges and projects related to embedded systems, real-time software, and computer engineering.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Email</h4>
                <a href="mailto:chaaban.khaled@gmail.com" className="text-primary hover:underline">chaaban.khaled@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <i className="fas fa-phone text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Phone</h4>
                <p className="text-gray-700">(966) 54-0946629</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <i className="fas fa-map-marker-alt text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Location</h4>
                <p className="text-gray-700">Umm Al-Qura University, Makkah, Saudi Arabia</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <i className="fab fa-linkedin text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">LinkedIn</h4>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/alain-khaled-chaaban</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <i className="fas fa-graduation-cap text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Google Scholar</h4>
                <a href="https://scholar.google.com/citations?user=B1hDTjMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Profile</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
