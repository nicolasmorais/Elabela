"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  time: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="mb-12">
      <h3 className="text-3xl font-bold mb-8">
        {testimonials.length} comentários
      </h3>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-10 w-10 flex-shrink-0"></div>
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                <p className="font-bold text-gray-800 dark:text-gray-200">
                  {testimonial.name}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-1 pl-3">
                <button className="hover:underline">Curtir</button>
                <button className="hover:underline">Responder</button>
                <span>{testimonial.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};