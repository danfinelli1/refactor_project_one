# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@questions = []
@questions << Question.create(:question => "Link tags do not require closing tags.", :links=> "http://xomisse.com/blog/top-5-most-common-coding-mistakes-i-see-on-blogs/")
@questions << Question.new(:question => "Link tags do not require closing tags.", :links=> "http://xomisse.com/blog/top-5-most-common-coding-mistakes-i-see-on-blogs/")
@questions << Question.new(:question => "Link tags do not require closing tags.", :links=> "http://xomisse.com/blog/top-5-most-common-coding-mistakes-i-see-on-blogs/")
@questions << Question.new(:question => "Link tags do not require closing tags.", :links=> "http://xomisse.com/blog/top-5-most-common-coding-mistakes-i-see-on-blogs/")

Language.create(:name => "html", :questions => @questions)
