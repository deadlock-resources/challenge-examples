import com.google.gson.Gson

object Main {
    @kotlin.jvm.JvmStatic
    fun main(args: Array<String>) {
        if (args.size > 0) {
            multiply(args[0])
        } else {
            println("No given arguments")
        }
    }

    @kotlin.jvm.JvmStatic
    private fun multiply(integers: String) {

    }
}
