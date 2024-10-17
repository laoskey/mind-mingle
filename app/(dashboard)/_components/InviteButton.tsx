"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/clerk-react";

import { Plus } from "lucide-react";

export function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus className='h-4 w-4 mr-2' />
          Invite menbers
        </Button>
      </DialogTrigger>
      <DialogContent className='p-0 bg-transparent border-none max-w-[880px]'>
        <OrganizationProfile />
        {/* <UserProfile /> */}
      </DialogContent>
    </Dialog>
  );
}
