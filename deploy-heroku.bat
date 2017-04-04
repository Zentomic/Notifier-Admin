git add .

git commit -m "deploy heroku zentomic-notifier better"

heroku login

heroku git:remote -a zentomic-notifier

git remote -v

git push heroku master
