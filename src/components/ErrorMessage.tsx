import { ApolloError } from '@apollo/client';
import { XCircleIcon } from '@heroicons/react/16/solid';

interface ErrorMessageProps {
  error?: ApolloError;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Oops! Something went wrong!</h3>
          <div className="mt-2 text-sm text-red-700">
            {error && (
              <ul role="list" className="list-disc space-y-1 pl-5">
                {error.graphQLErrors && error.graphQLErrors.map((error, index) => <li key={index}>{error.message}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
