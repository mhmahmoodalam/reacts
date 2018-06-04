/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('messages', JSON.stringify([
      {
        id: 'm_1',
        threadID: 't_1',
        threadName: 'Khalid',
        authorName: 'Krishna',
        text: 'Hey Khalid, you want a replacement for the product you recently purchased?',
        timestamp: Date.now() - 99999
      },
      {
        id: 'm_2',
        threadID: 't_1',
        threadName: 'Khalid',
        authorName: 'Khalid',
        text: 'Hi. Definitely. Its malfunctioning.',
        timestamp: Date.now() - 89999
      },
      {
        id: 'm_3',
        threadID: 't_1',
        threadName: 'Khalid',
        authorName: 'Krishna',
        text: 'Please send a mail to CSA@abc.com pointing the issues.',
        timestamp: Date.now() - 79999
      },
      {
        id: 'm_4',
        threadID: 't_2',
        threadName: 'Roopa',
        authorName: 'Krishna',
        text: 'Hi Roopa, this is from customer care regarding the product you recently purchased',
        timestamp: Date.now() - 69999
      },
      {
        id: 'm_5',
        threadID: 't_2',
        threadName: 'Roopa',
        authorName: 'Roopa',
        text: 'Hi. ',
        timestamp: Date.now() - 59999
      },
      {
        id: 'm_6',
        threadID: 't_3',
        threadName: 'Functional Heads',
        authorName: 'Krishna',
        text: 'Hey Rimika, are you satisfied with the product you recently purchased?',
        timestamp: Date.now() - 49999
      },
      {
        id: 'm_7',
        threadID: 't_3',
        threadName: 'Rimika',
        authorName: 'Rimika',
        text: 'Hi. Yeah, of course.  Thank you',
        timestamp: Date.now() - 39999
      }
    ]));
  }

};
