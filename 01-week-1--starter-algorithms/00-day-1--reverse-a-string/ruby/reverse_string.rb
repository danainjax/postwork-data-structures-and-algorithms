def reverse_string(str)
  reversed_str = ""

  str.chars.each do |char|
    reversed_str = char + reversed_str
  end

  reversed_str
end




if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  puts "Expecting: 'kcajanad'"
  puts "=>", reverse_string("danajack")

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution