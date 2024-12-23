import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BuildingDialogProps {
  isOpen: boolean;
  handleOpenChange: (isOpen: boolean) => void;
}

export function BuildingDialog({
  isOpen,
  handleOpenChange,
}: BuildingDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">
            Coming Soon! 🚀
          </DialogTitle>
          <DialogDescription className="text-lg mt-4 text-foreground/80">
            We're working hard to bring you the perfect developer toolset for
            macOS.
            <br />
            <br />
            Join our waitlist to be the first to know when it launches and get
            exclusive early access!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
