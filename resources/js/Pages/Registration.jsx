import { Head, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

export default function Registration() {
    const { data, setData, post, processing, errors, reset } = useForm({
        candidate_full_name: '',
        bach_interested: '',
        mobile_number: '',
        email: '',
        full_address: '',
        payment_method: '',
        sender_mobile_number: '',
        amount_sent: '',
        transaction_id: '',
        course_interested: '',
        facebook_profile_link: '',
        representative_name: '',
    });

    const [courses, setCourses] = useState([]);
    const [representatives, setRepresentatives] = useState([]);
    const [batches, setBatches] = useState([]);
    const [paymentMethods, setPaymentMethods] = useState([]);

    useEffect(() => {
        fetch('/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data));

        fetch('/api/representatives')
            .then(response => response.json())
            .then(data => setRepresentatives(data));

        fetch('/api/batches')
            .then(response => response.json())
            .then(data => setBatches(data));

        fetch('/api/payment-methods')
            .then(response => response.json())
            .then(data => setPaymentMethods(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('student.register'), {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: 'Our team will contact you shortly.',
                    showConfirmButton: false,
                    timer: 3000
                }).then(() => {
                    window.location = '/';
                });
            },
            onError: (errors) => {
                console.error('Registration failed:', errors);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed!',
                    text: 'Please check the form for errors.',
                });
            },
        });
    };

    return (
        <>
            <Head title="Registration Form - Turning Point Job Aid" />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex justify-center mb-6">
                       
                    </div>
                    <h2 className="text-4xl font-bold text-center text-red-700 mb-6">Admission Form</h2>
                    <p className="text-red-600 text-center mb-4 text-lg">💥 সকল তথ্য ইংরেজিতে দিতে হবে। [ '*'  চিহ্নিত সকল অপশন সঠিকভাবে পূরণ করুন] </p>
                    <p className="text-gray-600 text-center mb-8 text-md">নিম্নের তথ্যগুলো সতর্কতার সাথে পূরণ করুন। তথ্য প্রদানে কোনো সমস্যা হলে 01896 22 42 02/05/06/07/08/10/11 -এ যোগাযোগ করুন।  আমাদের ফেসবুক লাইভের উন্মুক্ত ক্লাসগুলো ছাড়া অন্যকোনো অনলাইন ক্লাস কর্তৃপক্ষের অনুমতি ব্যতীত রেকডিং করা, হোয়ার্টসঅ্যাপ, ফেসবুক, ইউটিউব বা অন্যকোনো সোশাল মিডিয়ায় শেয়ার করলে ডিজিটাল নিরাপত্তা আইন ২০১৮ অনুযায়ী ব্যবস্থা নেওয়া হবে।</p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label htmlFor="course_interested" className="block text-sm font-medium text-gray-700">Choose Your Course <span className="text-red-500">*</span></label>
                            <select
                                id="course_interested"
                                value={data.course_interested}
                                onChange={(e) => setData('course_interested', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            >
                                <option value="">Choose Your Course</option>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.name}>{course.name}</option>
                                ))}
                            </select>
                            {errors.course_interested && <div className="text-red-500 text-sm mt-1">{errors.course_interested}</div>}
                        </div>

                        <div>
                            <label htmlFor="candidate_full_name" className="block text-sm font-medium text-gray-700">Candidate Full Name (in English) <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="candidate_full_name"
                                value={data.candidate_full_name}
                                onChange={(e) => setData('candidate_full_name', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            />
                            {errors.candidate_full_name && <div className="text-red-500 text-sm mt-1">{errors.candidate_full_name}</div>}
                        </div>

                        <div>
                            <label htmlFor="mobile_number" className="block text-sm font-medium text-gray-700">📞  Mobile Number (Used) <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="mobile_number"
                                value={data.mobile_number}
                                onChange={(e) => setData('mobile_number', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            />
                            {errors.mobile_number && <div className="text-red-500 text-sm mt-1">{errors.mobile_number}</div>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">📧 Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            />
                            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                        </div>

                        <div>
                            <label htmlFor="full_address" className="block text-sm font-medium text-gray-700">Your full address / সুন্দরবন কুরিয়ারে শিট পাঠানোর ঠিকানা <span className="text-red-500">*</span></label>
                            <textarea
                                id="full_address"
                                value={data.full_address}
                                onChange={(e) => setData('full_address', e.target.value)}
                                rows="3"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            ></textarea>
                            {errors.full_address && <div className="text-red-500 text-sm mt-1">{errors.full_address}</div>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your payment methods <span className="text-red-500">*</span></label>
                            <div className="mt-1 space-y-2">
                                {paymentMethods.map((method) => (
                                    <div className="flex items-center" key={method.id}>
                                        <input
                                            type="radio"
                                            id={method.name}
                                            name="payment_method"
                                            value={`${method.name} : ${method.number}`}
                                            onChange={(e) => setData('payment_method', e.target.value)}
                                            className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                                            required
                                        />
                                        <label htmlFor={method.name} className="ml-3 block text-sm font-medium text-gray-700">{method.name} : {method.number}</label>
                                    </div>
                                ))}
                            </div>
                            {errors.payment_method && <div className="text-red-500 text-sm mt-1">{errors.payment_method}</div>}
                        </div>

                        <div>
                            <label htmlFor="sender_mobile_number" className="block text-sm font-medium text-gray-700">আপনি যে নম্বর থেকে আমাদের বিকাশ  মার্চেন্ট/রকেট পার্সোনাল/নগদ পার্সোনাল নম্বর  টাকা পাঠিয়েছেন, সেই নাম্বরটি দিন <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="sender_mobile_number"
                                value={data.sender_mobile_number}
                                onChange={(e) => setData('sender_mobile_number', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            />
                            {errors.sender_mobile_number && <div className="text-red-500 text-sm mt-1">{errors.sender_mobile_number}</div>}
                        </div>

                        <div>
                            <label htmlFor="amount_sent" className="block text-sm font-medium text-gray-700">পাঠানো টাকার পরিমাণ উল্লেখ করুন <span className="text-red-500">*</span></label>
                            <input
                                type="number"
                                id="amount_sent"
                                value={data.amount_sent}
                                onChange={(e) => setData('amount_sent', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            />
                            {errors.amount_sent && <div className="text-red-500 text-sm mt-1">{errors.amount_sent}</div>}
                        </div>

                        <div>
                            <label htmlFor="transaction_id" className="block text-sm font-medium text-gray-700">রকেটে / নগদ / বিকাশ  পাঠানো লেনদেন (Transactions ID) আইডি টি দিন <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="transaction_id"
                                value={data.transaction_id}
                                onChange={(e) => setData('transaction_id', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            />
                            {errors.transaction_id && <div className="text-red-500 text-sm mt-1">{errors.transaction_id}</div>}
                        </div>

                         <div>
                            <label htmlFor="bach_interested" className="block text-sm font-medium text-gray-700">যে ব্যাচে ভর্তি হতে আগ্রহী? <span className="text-red-500">*</span></label>
                            <select
                                id="bach_interested"
                                value={data.bach_interested}
                                onChange={(e) => setData('bach_interested', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            >
                                <option value="">ব্যাচ নির্বাচন করুন</option>
                                {batches.map((batch) => (
                                    <option key={batch.id} value={batch.name}>{batch.name}</option>
                                ))}
                            </select>
                            {errors.course_interested && <div className="text-red-500 text-sm mt-1">{errors.course_interested}</div>}
                        </div>

                        

                        <div>
                            <label htmlFor="facebook_profile_link" className="block text-sm font-medium text-gray-700">আপনার ফেসবুক প্রোফাইল লিংক দিন (যেমন: www.facebook.com/turningpointjobaid) <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="facebook_profile_link"
                                value={data.facebook_profile_link}
                                onChange={(e) => setData('facebook_profile_link', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            />
                            {errors.facebook_profile_link && <div className="text-red-500 text-sm mt-1">{errors.facebook_profile_link}</div>}
                        </div>

                        <div>
                            <label htmlFor="representative_name" className="block text-sm font-medium text-gray-700">আপনি আমাদের যে প্রতিনিধির সাথে  WhatsApp যুক্ত আছেন বা  কথা বলে এডমিশন নিয়েছেন তার নাম নির্বাচন করুন? <span className="text-red-500">*</span></label>
                            <select
                                id="representative_name"
                                value={data.representative_name}
                                onChange={(e) => setData('representative_name', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 p-2"
                                required
                            >
                                <option value="">Select a Representative</option>
                                {representatives.map((rep) => (
                                    <option key={rep.id} value={`${rep.name} - ${rep.number}`}>{rep.name} - {rep.number}</option>
                                ))}
                            </select>
                            {errors.representative_name && <div className="text-red-500 text-sm mt-1">{errors.representative_name}</div>}
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="agreement"
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="agreement" className="ml-2 block text-sm text-gray-900">
                                আপনি এই শর্ত মেনে ভর্তি হয়েছেন যে, কোন অবস্থাতেই ভর্তি বাতিল করা যাবে না এবং টাকা ফেরতযোগ্য নয়,ধন্যবাদ।*
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-6 py-3 bg-red-600 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                disabled={processing}
                            >
                                Register Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}