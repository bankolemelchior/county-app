import { reactive, computed } from 'vue';

const state = reactive({
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
  },
  currentStep: 1,
});

export const useForm = () => {
  const formData = computed(() => state.formData);
  const currentStep = computed(() => state.currentStep);

  const nextStep = () => {
    if (state.currentStep < 4) state.currentStep++;
  };

  const prevStep = () => {
    if (state.currentStep > 1) state.currentStep--;
  };

  const updateFormData = (newData) => {
    state.formData = { ...state.formData, ...newData };
  };

  return { formData, currentStep, nextStep, prevStep, updateFormData };
};
