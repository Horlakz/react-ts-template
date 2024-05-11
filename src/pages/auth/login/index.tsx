import { Link } from "react-router-dom";

import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { useForm } from "@/hooks/form";
import { loginSchema } from "@/pages/auth/auth.schema";
import { useLogin } from "../auth.hook";

const LoginPage = () => {
  const form = useForm({
    schema: loginSchema,
    onSubmit: function () {
      loginMutation.mutate();
    },
  });

  const loginMutation = useLogin(form.formData);

  return (
    <form className="space-y-4 w-full">
      <Input
        label="Email"
        type="email"
        value={form.formData.email}
        onChange={form.handleChange}
        validationError={form.errors.email}
      />

      <Input
        label="Password"
        type="password"
        value={form.formData.password}
        onChange={form.handleChange}
        validationError={form.errors.password}
      />

      <p className="flex justify-end w-full text-gray-300">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>

      <div className="flex-center w-full">
        <Button
          className="w-full flex-center"
          isLoading={loginMutation.isLoading}
          onClick={form.handleSubmit}
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
