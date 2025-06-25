export default function Page() {
  async function submitForm(formData) {
    'use server';

    const formFields = {
      email: formData.get('email'),
      message: formData.get('message'),
    };

    console.log('form fields:', formFields);
    console.log('TODO: send thse form fields values to a backend');

    return formFields;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold text-center mb-6 w-100">Contact</h1>
        <form
          action={submitForm}
          className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-black space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email:{' '}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="border border-gray"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message:{' '}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="border border-gray"
            />
          </div>
          <button type="submit" className="border border-gray p-2">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
