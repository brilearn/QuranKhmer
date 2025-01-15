import { useCallback, useState } from 'react';

import { IMessageId } from '@novu/headless';

import { useHeadlessService } from './useHeadlessService';

const useMarkNotificationAsSeen = () => {
  const { headlessService, isReady } = useHeadlessService();
  const [isMutating, setIsMutating] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const markNotificationsAsSeen = useCallback(
    (messageIds: IMessageId) => {
      if (isReady) {
        headlessService.markNotificationsAsSeen({
          messageId: messageIds,
          listener: ({ isLoading }) => {
            setIsMutating(isLoading);
          },
          onSuccess: () => {
            setError(null);
          },
          onError: (err) => {
            setError(err);
          },
        });
      }
    },
    [headlessService, isReady],
  );

  return {
    mutate: markNotificationsAsSeen,
    isLoading: isMutating,
    error,
  };
};

export default useMarkNotificationAsSeen;
