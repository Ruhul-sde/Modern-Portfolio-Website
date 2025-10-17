
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactDialog({ trigger }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-[#0F172A] border-white/10 text-[#F1F5F9]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-[#94A3B8]">
            Fill out the form below and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#F1F5F9] flex items-center gap-2">
              <User className="w-4 h-4 text-[#3B82F6]" />
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="bg-[#1E293B] border-white/10 text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#3B82F6]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#F1F5F9] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#3B82F6]" />
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="bg-[#1E293B] border-white/10 text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#3B82F6]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-[#F1F5F9] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#3B82F6]" />
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              className="bg-[#1E293B] border-white/10 text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#3B82F6]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#F1F5F9]">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or inquiry..."
              required
              rows={5}
              className="bg-[#1E293B] border-white/10 text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#3B82F6] resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 border-white/10 text-[#F1F5F9] hover:bg-white/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] hover:opacity-90 text-white"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
