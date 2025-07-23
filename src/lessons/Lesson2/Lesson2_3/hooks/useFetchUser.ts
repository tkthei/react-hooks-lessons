import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

export const useFetchUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true; // このフラグはコンポーネントのマウント状態を追跡します

    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const userData: User = await response.json();

        if (isMounted) {
          setUser(userData);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setLoading(false);
        }
      }
    };

    fetchUser();

    // クリーンアップ関数
    return () => {
      isMounted = false; // コンポーネントがアンマウントされたらフラグをfalseに設定
    };
  }, []); // 空の依存配列

  return { user, loading };
};
