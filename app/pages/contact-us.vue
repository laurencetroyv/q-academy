<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 pt-16 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about Q-Academy? We're here to help you transform special needs education and healthcare.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

            <form class="space-y-6" @submit.prevent="submitForm">
              <!-- Name Fields -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your last name"
                  >
                </div>
              </div>

              <!-- Email & Phone -->
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                  >
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+63 XXX XXX XXXX"
                  >
                </div>
              </div>

              <!-- User Type -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">
                  I am a: *
                </label>
                <div class="grid md:grid-cols-3 gap-4">
                  <label
                      v-for="userType in userTypes"
                      :key="userType.value"
                      :class="[
                      'relative flex cursor-pointer rounded-lg border p-4 focus:outline-none transition-all',
                      form.userType === userType.value
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    ]"
                  >
                    <input
                        v-model="form.userType"
                        type="radio"
                        :value="userType.value"
                        class="sr-only"
                    >
                    <div class="flex items-center space-x-3">
                      <div
:class="[
                        'w-8 h-8 rounded-lg flex items-center justify-center',
                        userType.bgColor
                      ]">
                        <Icon :name="userType.icon" class="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p class="text-sm font-medium text-gray-900">{{ userType.label }}</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="demo">Request a Demo</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Questions</option>
                  <option value="feedback">Feedback & Suggestions</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                />
              </div>

              <!-- Privacy Consent -->
              <div class="flex items-start space-x-3">
                <input
                    id="consent"
                    v-model="form.consent"
                    type="checkbox"
                    required
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                >
                <label for="consent" class="text-sm text-gray-600">
                  I agree to the <a href="/privacy" class="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                  and consent to Q-Academy storing and processing my personal information to respond to my inquiry. *
                </label>
              </div>

              <!-- Submit Button -->
              <UButton
                  type="submit"
                  color="primary"
                  size="lg"
                  :loading="isSubmitting"
                  class="w-full"
              >
                {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
              </UButton>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <!-- Contact Cards -->
            <div class="space-y-6">
              <!-- Address -->
              <div class="bg-blue-50 rounded-2xl p-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-map-pin" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                    <p class="text-gray-600">
                      Cagayan de Oro City<br>
                      Northern Mindanao, Philippines<br>
                      Business Hours: Mon-Fri 8AM-6PM PHT
                    </p>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="bg-green-50 rounded-2xl p-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-envelope" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-2">Email Us</h3>
                    <div class="space-y-1">
                      <p class="text-gray-600">General: <a href="mailto:academy@qachs.com" class="text-green-600 hover:text-green-500">academy@qachs.com</a></p>
                      <p class="text-gray-600">Support: <a href="mailto:support@qachs.com" class="text-green-600 hover:text-green-500">support@qachs.com</a></p>
                      <p class="text-gray-600">Partnership: <a href="mailto:partners@qachs.com" class="text-green-600 hover:text-green-500">partners@qachs.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Phone -->
              <div class="bg-purple-50 rounded-2xl p-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-phone" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p class="text-gray-600">
                      Main: +63 XXX XXX XXXX<br>
                      Emergency Support: +63 XXX XXX XXXX<br>
                      Available 24/7 for urgent matters
                    </p>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div class="bg-gray-50 rounded-2xl p-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-globe-alt" class="w-6 h-6 text-white" />
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div class="flex space-x-4">
                      <a href="#" class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Icon name="i-simple-icons-facebook" class="w-5 h-5 text-white" />
                      </a>
                      <a href="#" class="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <Icon name="i-simple-icons-twitter" class="w-5 h-5 text-white" />
                      </a>
                      <a href="#" class="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                        <Icon name="i-simple-icons-linkedin" class="w-5 h-5 text-white" />
                      </a>
                      <a href="#" class="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                        <Icon name="i-simple-icons-instagram" class="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="mt-8 p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white">
              <h3 class="font-semibold mb-4">Need Immediate Help?</h3>
              <div class="space-y-3">
                <a href="/support" class="block bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-colors">
                  <div class="flex items-center space-x-3">
                    <Icon name="i-heroicons-question-mark-circle" class="w-5 h-5" />
                    <span>Visit Support Center</span>
                  </div>
                </a>
                <a href="/demo" class="block bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-colors">
                  <div class="flex items-center space-x-3">
                    <Icon name="i-heroicons-play" class="w-5 h-5" />
                    <span>Schedule a Demo</span>
                  </div>
                </a>
                <a href="/documentation" class="block bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition-colors">
                  <div class="flex items-center space-x-3">
                    <Icon name="i-heroicons-document-text" class="w-5 h-5" />
                    <span>View Documentation</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-gray-600">
            Quick answers to common questions about Q-Academy.
          </p>
        </div>

        <div class="space-y-6">
          <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="bg-white rounded-2xl shadow-sm"
          >
            <button
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                @click="toggleFaq(index)"
            >
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <Icon
                  name="i-heroicons-chevron-down"
                  :class="[
                  'w-5 h-5 text-gray-500 transition-transform',
                  openFaqs.includes(index) ? 'rotate-180' : ''
                ]"
              />
            </button>
            <div
                v-if="openFaqs.includes(index)"
                class="px-6 pb-4 text-gray-600 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact Us - Q-Academy',
  meta: [
    { name: 'description', content: 'Get in touch with Q-Academy for questions about our integrated special needs education and healthcare platform. We\'re here to help transform your educational experience.' }
  ]
})

// Reactive data
const isSubmitting = ref(false)
const openFaqs = ref([])

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  userType: '',
  subject: '',
  message: '',
  consent: false
})

const userTypes = [
  {
    value: 'teacher',
    label: 'Teacher',
    icon: 'i-heroicons-academic-cap',
    bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    value: 'doctor',
    label: 'Healthcare',
    icon: 'i-heroicons-heart',
    bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500'
  },
  {
    value: 'parent',
    label: 'Parent',
    icon: 'i-heroicons-users',
    bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
  }
]

const faqs = [
  {
    question: 'How does Q-Academy ensure data privacy and security?',
    answer: 'Q-Academy implements industry-standard encryption, HIPAA compliance measures, and role-based access controls to ensure all student and medical data is completely secure and private.'
  },
  {
    question: 'What platforms is Q-Academy available on?',
    answer: 'Q-Academy is available as a desktop application for teachers, a web application for healthcare professionals, and a mobile app for students and parents, ensuring seamless access across all devices.'
  },
  {
    question: 'Can Q-Academy integrate with existing school systems?',
    answer: 'Yes, Q-Academy is designed to integrate with most existing school management systems and electronic health record platforms through our comprehensive API and data migration services.'
  },
  {
    question: 'What training and support do you provide?',
    answer: 'We provide comprehensive onboarding, training materials, live support sessions, and 24/7 technical support to ensure successful implementation and ongoing usage of the platform.'
  },
  {
    question: 'Is Q-Academy suitable for all types of special needs?',
    answer: 'Q-Academy is designed to support a wide range of special needs including autism spectrum disorders, intellectual disabilities, physical disabilities, and various learning differences with customizable learning modules.'
  }
]

// Methods
const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success message
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')

    // Reset form
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (index) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}
</script>