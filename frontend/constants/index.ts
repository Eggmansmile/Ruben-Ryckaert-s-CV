// Form validation constants
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 2,
  SUBJECT_MIN_LENGTH: 3,
  MESSAGE_MIN_LENGTH: 10,
} as const;

// Contact form messages
export const CONTACT_MESSAGES = {
  SUCCESS: {
    title: 'Message sent successfully!',
    description: 'Thank you for reaching out. I\'ll get back to you soon.',
  },
  ERROR: {
    title: 'Error sending message',
    generic: 'An error occurred. Please try again.',
  },
  LOADING: 'Sending...',
  SUBMIT: 'Send Message',
} as const;

// Animation durations (in ms)
export const ANIMATION_DURATIONS = {
  SUCCESS_MESSAGE_CLEAR: 5000,
  MODAL_TRANSITION: 300,
  HOVER_EFFECTS: 300,
} as const;

// Gallery constants
export const GALLERY_CONSTANTS = {
  KEYBOARD_KEYS: {
    ESCAPE: 'Escape',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
  } as const,
} as const;