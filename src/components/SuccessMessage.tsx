import { Button } from '@headlessui/react';
import { FC, MouseEventHandler } from 'react';
import { CheckCircleIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

interface SuccessMessageProps {
  message: string;
  dismissAction?: MouseEventHandler<HTMLButtonElement> | undefined;
  nav?: {
    link: string;
    text: string;
  };
}

export const SuccessMessage: FC<SuccessMessageProps> = ({ message, dismissAction, nav }) => {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">{message}</h3>
          <div className="mt-4">
            <div className="-mx-2 -my-1 5 flex">
              {nav?.link && (
                <Link
                  to={nav.link}
                  reloadDocument
                  className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  {nav.text}
                </Link>
              )}
              {dismissAction && (
                <Button
                  type="button"
                  onClick={dismissAction}
                  className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  Dismiss
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
