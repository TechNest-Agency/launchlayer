import React, { createContext, useContext, useReducer } from 'react';
import apiClient from '../config/api';

// Initial state
const initialState = {
  loading: false,
  success: false,
  error: null,
  formData: {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  }
};

// Action types
const CONTACT_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_SUCCESS: 'SET_SUCCESS',
  SET_ERROR: 'SET_ERROR',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  RESET_FORM: 'RESET_FORM'
};

// Reducer
const contactReducer = (state, action) => {
  switch (action.type) {
    case CONTACT_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null
      };
    
    case CONTACT_ACTIONS.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null
      };
    
    case CONTACT_ACTIONS.SET_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      };
    
    case CONTACT_ACTIONS.UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value
        }
      };
    
    case CONTACT_ACTIONS.RESET_FORM:
      return {
        ...initialState,
        formData: {
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        }
      };
    
    default:
      return state;
  }
};

// Create context
const ContactContext = createContext();

// Provider component
export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Update form field
  const updateFormField = (field, value) => {
    dispatch({
      type: CONTACT_ACTIONS.UPDATE_FORM_DATA,
      payload: { field, value }
    });
  };

  // Submit contact form
  const submitContactForm = async (formData) => {
    try {
      dispatch({ type: CONTACT_ACTIONS.SET_LOADING, payload: true });
      
      const response = await apiClient.post('/api/contact/submit', formData);
      
      if (response.data.success) {
        dispatch({ type: CONTACT_ACTIONS.SET_SUCCESS });
        // Reset form after successful submission
        setTimeout(() => {
          dispatch({ type: CONTACT_ACTIONS.RESET_FORM });
        }, 3000);
      } else {
        dispatch({ 
          type: CONTACT_ACTIONS.SET_ERROR, 
          payload: response.data.message || 'Failed to send message' 
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      dispatch({ 
        type: CONTACT_ACTIONS.SET_ERROR, 
        payload: error.response?.data?.message || 'Failed to send message. Please try again.' 
      });
    }
  };

  // Reset form
  const resetForm = () => {
    dispatch({ type: CONTACT_ACTIONS.RESET_FORM });
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: CONTACT_ACTIONS.SET_ERROR, payload: null });
  };

  const value = {
    ...state,
    updateFormField,
    submitContactForm,
    resetForm,
    clearError
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook to use contact context
export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}; 