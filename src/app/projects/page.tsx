"use client";

import { ProjectComponent } from "@/components";
import { Suspense } from "react";

export default function Projects() {
  return (
    <Suspense>
      <ProjectComponent />
    </Suspense>
  );
}
