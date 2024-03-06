import { z } from 'zod';
export const formSchema = z.object({
    userInputValue: z.string().min(3, {
      message: "Text must be at least 3 characters or try to click load more",
    }),
  });

export type SearchSchema= z.infer<typeof formSchema>