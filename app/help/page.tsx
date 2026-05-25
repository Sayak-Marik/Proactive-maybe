'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const faqCategories = [
  {
    title: 'Shopping & Orders',
    items: [
      {
        question: 'How do I place an order?',
        answer: 'Browse our collection, select your items, and add them to your cart. Click the cart icon to review your items, then proceed to checkout. You can sign in to your account or continue as a guest.',
      },
      {
        question: 'Can I change my order after placing it?',
        answer: 'If your order hasn\'t shipped yet, contact our customer service team as soon as possible. We\'ll do our best to modify or cancel your order. Once an order has shipped, it cannot be modified.',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Enter your address at checkout to see available shipping options.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay for your convenience and security.',
      },
    ],
  },
  {
    title: 'Shipping & Delivery',
    items: [
      {
        question: 'How long does standard shipping take?',
        answer: 'Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business day delivery. Delivery times are estimates and may vary depending on your location.',
      },
      {
        question: 'Can I track my order?',
        answer: 'Yes, you\'ll receive a tracking number via email once your order ships. You can use this number to track your package on the carrier\'s website.',
      },
      {
        question: 'What is your shipping cost?',
        answer: 'Shipping costs are calculated at checkout based on your location and chosen shipping method. Orders over $150 qualify for free standard shipping.',
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Free standard shipping is available on orders $150 and above to most locations. Some remote areas may have additional fees.',
      },
    ],
  },
  {
    title: 'Returns & Exchanges',
    items: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy from the date of purchase. Items must be unused, unwashed, and in original condition with tags attached for a full refund.',
      },
      {
        question: 'How do I initiate a return?',
        answer: 'Log into your account, go to your order history, and select the item you wish to return. Follow the return instructions and print your prepaid shipping label.',
      },
      {
        question: 'How long do refunds take?',
        answer: 'After we receive and inspect your return, refunds typically process within 7-10 business days. You\'ll receive an email confirmation once the refund has been issued.',
      },
      {
        question: 'Can I exchange an item?',
        answer: 'Yes, we offer exchanges for different sizes or colors. Select "Exchange" when initiating your return, and we\'ll send you the replacement item.',
      },
    ],
  },
  {
    title: 'Size & Fit',
    items: [
      {
        question: 'How do I find my correct size?',
        answer: 'Visit our Size Guide for detailed measurements and fit recommendations for each category. We recommend measuring yourself and comparing to our charts.',
      },
      {
        question: 'Do different styles fit differently?',
        answer: 'Yes, fit can vary slightly between styles. Always check the product description and size guide for specific style recommendations. Customer reviews often mention fit details.',
      },
      {
        question: 'What if the item doesn\'t fit?',
        answer: 'No problem! We offer free exchanges for different sizes. If you\'re not satisfied with the fit, we also accept returns within 30 days.',
      },
      {
        question: 'Are your sizes true to size?',
        answer: 'Most of our pieces are designed to fit true to size. Some styles have a relaxed fit, while others are more fitted. Check the product description for specific fit details.',
      },
    ],
  },
  {
    title: 'Products & Materials',
    items: [
      {
        question: 'What materials do you use?',
        answer: 'We use high-quality, performance-focused fabrics including sustainably-sourced nylon, recycled polyester, and organic cotton. Each product description details the specific materials used.',
      },
      {
        question: 'How should I care for my items?',
        answer: 'Machine wash cold with similar colors and lay flat to dry. Avoid bleach and fabric softeners. Full care instructions are included with each item and on product pages.',
      },
      {
        question: 'Are your products sustainable?',
        answer: 'We\'re committed to sustainability. We use eco-friendly materials, ethical manufacturing practices, and recyclable packaging. Learn more on our Sustainability page.',
      },
      {
        question: 'Do you have items for different activity levels?',
        answer: 'Yes, our collection ranges from everyday basics to high-performance workout wear. Each product is tagged with its intended use to help you choose.',
      },
    ],
  },
  {
    title: 'Account & Membership',
    items: [
      {
        question: 'Do I need an account to shop?',
        answer: 'No, you can shop as a guest. Creating an account allows you to track orders, save favorites, and enjoy a faster checkout experience.',
      },
      {
        question: 'How do I reset my password?',
        answer: 'Click "Forgot Password" on the login page and enter your email. You\'ll receive a link to reset your password within a few minutes.',
      },
      {
        question: 'Can I save items to my wishlist?',
        answer: 'Yes, create an account and click the heart icon on any product to add it to your wishlist. You can access your wishlist anytime in your account.',
      },
      {
        question: 'How do I unsubscribe from emails?',
        answer: 'You can manage your email preferences in your account settings. Click the unsubscribe link at the bottom of any marketing email.',
      },
    ],
  },
]

export default function HelpPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="border-b border-foreground/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl">
              Find answers to common questions about orders, shipping, returns, sizing, and more. Can't find what you're looking for?{' '}
              <Link href="#" className="text-foreground hover:underline font-medium">
                Contact us
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="border-b border-foreground/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="max-w-2xl">
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full px-6 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 lg:mb-20">
              <h2 className="text-2xl lg:text-3xl font-light mb-8 text-foreground tracking-tight">
                {category.title}
              </h2>
              <div className="space-y-0 border-t border-foreground/10">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex
                  const isExpanded = expandedIndex === globalIndex

                  return (
                    <div key={itemIndex} className="border-b border-foreground/10">
                      <button
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : globalIndex)
                        }
                        className="w-full py-6 flex items-start justify-between gap-4 hover:bg-muted/30 transition-colors group"
                      >
                        <h3 className="text-lg text-foreground text-left font-medium">
                          {item.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="pb-6 pr-12">
                          <p className="text-foreground/60 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="border-t border-foreground/10 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-light mb-6">Still have questions?</h2>
              <p className="text-lg text-foreground/60 mb-8">
                Our customer service team is here to help. Reach out to us through any of your preferred channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 border border-foreground/20 text-foreground rounded-lg hover:bg-foreground/5 transition-colors font-medium"
                >
                  Live Chat
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
