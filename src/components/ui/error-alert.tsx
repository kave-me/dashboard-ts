import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface ErrorAlertProps {
  error: Error;
}

export function ErrorAlert({ error }: ErrorAlertProps) {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Error loading market data</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
} 