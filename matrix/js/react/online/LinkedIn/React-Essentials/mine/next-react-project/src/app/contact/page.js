export default function Page() {
  async function submitForm(formData) {
    "use server";

    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("formFields: ", formFields);
    console.log("TODO: send form to backend");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Contact Info</h1>
        <form className="space-y-4 " action={submitForm}>
          <div>
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="focus:ring-2"
              style={{ color: "black" }}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              style={{ color: "black" }}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
}
