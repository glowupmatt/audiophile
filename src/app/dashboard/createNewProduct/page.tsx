"use client";

import DashBoardHeader from "@/app/components/DashBoardHeader";
import CreateProductMultiStepForm from "@/app/components/createProduct.tsx/CreateProductMultiStepForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const CreateProduct = (props: Props) => {
  const router = useRouter();
  const session = useSession();
  const userName = session.data?.user?.name;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/register");
    }
  }, [session?.status, router]);

  return (
    <div>
      <DashBoardHeader setOpen={setOpen} open={open} userName={userName} />
      <div>
        <CreateProductMultiStepForm />
      </div>
    </div>
  );
};

export default CreateProduct;
