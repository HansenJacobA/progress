interface Topic {
  id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Post {
  id?: string;
  topicId: string;
  topicName: string;
  yesterday: string;
  today: string;
  continued: string;
  blockers: string;
  createdAt?: string;
  updatedAt?: string;
}
