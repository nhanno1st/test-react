import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

interface BuyerFormData {
  name: string;
  email: string;
  address: string;
}

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Minimum 2 characters'),
  email: yup.string().required('Email is required').email('Invalid email'),
  address: yup.string().required('Address is required').min(5, 'Minimum 5 characters'),
});

export default function BuyerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BuyerFormData>({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = (data: BuyerFormData) => {
    console.log('Buyer Info:', data);
    toast.success('Buyer information submitted successfully!');
  };

return (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-[600px] mx-auto space-y-5"
  >
    <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">
      Buyer Information
    </h2>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        {...register('name')}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
        }`}
        placeholder="Enter your name"
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        {...register('email')}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
        }`}
        placeholder="Enter your email"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Address
      </label>
      <input
        {...register('address')}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          errors.address ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'
        }`}
        placeholder="Enter your address"
      />
      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
    </div>

    <button
      type="submit"
      disabled={!isValid}
      className={`w-full py-3 rounded-lg text-white font-semibold text-base transition-all duration-200 shadow-md ${
        isValid
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-gray-300 cursor-not-allowed'
      }`}
    >
      Submit
    </button>
    <div className="text-center">
      <p className={`text-sm font-medium ${isValid ? 'text-green-600' : 'text-red-500'}`}>
        {isValid ? '✓ Ready to submit' : 'Please correct the errors above'}
      </p>
    </div>
  </form>
);
}
