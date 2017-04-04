git add .

git commit -m "deploy heroku zentomic-webnotifier better"

heroku login

heroku git:remote -a zentomic-webnotifier

git remote -v

git push heroku master
