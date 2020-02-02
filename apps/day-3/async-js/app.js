const getUser = (name) => {
  const p = new Promise((resolve, reject) => {
    console.log('searching user. please wait...')

    setTimeout(() => {
      const user = users.find(u => u.name === name);
      if (!user) {
        reject('User does not exist!');
        return;
      }

      resolve(user);
    }, 4000);
  });

  return p;

};

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    console.log('searching posts. please wait...')

    setTimeout(() => {
      const postsForUser = posts.filter(p => p.userId === userId);
      if (postsForUser.length === 0) {
        reject('No posts for the user!');
        return;
      }

      resolve(postsForUser);
    }, 4000);
  });
};

const doWork = async () => {
  try {
    const result = await getUser('ram');
    console.log('user:', result);

    const result2 = await getPosts(result.id);
    console.log('posts for user:', result2);
  } catch (err) {
    console.log('Error:', err);
  }
}

console.log('begin');

doWork();

console.log('do some other operation');

console.log('end');